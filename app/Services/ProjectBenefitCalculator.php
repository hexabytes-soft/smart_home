<?php

namespace App\Services;

use App\Models\Project;
use App\Models\SmartComponent;
use Illuminate\Support\Collection;

class ProjectBenefitCalculator
{
    /**
     * @return array{
     *     lines: list<array{type: string, icon: string, name: string, qty: int, buy_unit: float, sell_unit: float, buy_total: float, sell_total: float, benefit: float}>,
     *     extra_expenses: list<array{id: string, name: string, price: float}>,
     *     programming: float,
     *     installation: float,
     *     devices_buy: float,
     *     devices_sell: float,
     *     devices_benefit: float,
     *     expenses_total: float,
     *     total_buy: float,
     *     total_sell: float,
     *     total_benefit: float,
     *     item_count: int
     * }
     */
    public function calculate(Project $project, ?Collection $catalog = null): array
    {
        $catalog = $catalog ?? SmartComponent::query()->get()->keyBy('key');
        $mapData = $project->map_data ?? [];
        $quotation = is_array($mapData['quotation'] ?? null) ? $mapData['quotation'] : [];
        $benefits = is_array($mapData['benefits'] ?? null) ? $mapData['benefits'] : [];

        $counts = [];

        foreach ($mapData['floors'] ?? [] as $floor) {
            if (! is_array($floor)) {
                continue;
            }

            foreach ($floor['smart_devices'] ?? [] as $device) {
                if (! is_array($device)) {
                    continue;
                }

                $type = (string) ($device['type'] ?? '');
                if ($type === '') {
                    continue;
                }

                /** @var SmartComponent|null $component */
                $component = $catalog->get($type);
                $sellUnit = $component
                    ? (float) $component->price
                    : (float) ($device['price'] ?? 0);
                $buyUnit = $component ? (float) $component->buy_price : 0.0;
                $key = $type.'::'.number_format($buyUnit, 3, '.', '').'::'.number_format($sellUnit, 3, '.', '');

                $qty = (float) ($device['qty'] ?? 1);
                if ($qty <= 0) {
                    $qty = 1.0;
                }

                if (! isset($counts[$key])) {
                    $counts[$key] = [
                        'type' => $type,
                        'icon' => $component?->icon ?: '●',
                        'name' => $component?->name ?: $type,
                        'qty' => 0.0,
                        'buy_unit' => $buyUnit,
                        'sell_unit' => $sellUnit,
                        'unit' => $component?->unit ?: ($device['unit'] ?? 'piece'),
                    ];
                }

                $counts[$key]['qty'] += $qty;
            }
        }

        $lines = [];
        $devicesBuy = 0.0;
        $devicesSell = 0.0;
        $itemCount = 0;

        foreach ($counts as $line) {
            $buyTotal = $this->money($line['buy_unit'] * $line['qty']);
            $sellTotal = $this->money($line['sell_unit'] * $line['qty']);
            $benefit = $this->money($sellTotal - $buyTotal);
            $devicesBuy += $buyTotal;
            $devicesSell += $sellTotal;
            $itemCount += $line['qty'];

            $lines[] = [
                ...$line,
                'buy_total' => $buyTotal,
                'sell_total' => $sellTotal,
                'benefit' => $benefit,
            ];
        }

        usort($lines, fn (array $a, array $b) => strcasecmp($a['name'], $b['name']));

        $extraExpenses = [];
        $expensesTotal = 0.0;
        foreach ($benefits['extra_expenses'] ?? [] as $expense) {
            if (! is_array($expense)) {
                continue;
            }

            $price = $this->money(max(0, (float) ($expense['price'] ?? 0)));
            $name = trim((string) ($expense['name'] ?? ''));
            if ($name === '' && $price <= 0) {
                continue;
            }

            $extraExpenses[] = [
                'id' => (string) ($expense['id'] ?? uniqid('exp_', true)),
                'name' => $name !== '' ? $name : 'مصروف',
                'price' => $price,
            ];
            $expensesTotal += $price;
        }

        $programming = $this->money(max(0, (float) ($quotation['programming_price'] ?? 0)));
        $installation = $this->money(max(0, (float) ($quotation['installation_price'] ?? 0)));

        $devicesBuy = $this->money($devicesBuy);
        $devicesSell = $this->money($devicesSell);
        $expensesTotal = $this->money($expensesTotal);
        $totalBuy = $this->money($devicesBuy + $expensesTotal);
        $totalSell = $this->money($devicesSell + $programming + $installation);
        $totalBenefit = $this->money($totalSell - $totalBuy);

        return [
            'lines' => $lines,
            'extra_expenses' => $extraExpenses,
            'programming' => $programming,
            'installation' => $installation,
            'devices_buy' => $devicesBuy,
            'devices_sell' => $devicesSell,
            'devices_benefit' => $this->money($devicesSell - $devicesBuy),
            'expenses_total' => $expensesTotal,
            'total_buy' => $totalBuy,
            'total_sell' => $totalSell,
            'total_benefit' => $totalBenefit,
            'item_count' => $itemCount,
        ];
    }

    /**
     * @param  list<array{id?: string, name?: string, price?: float|int|string}>  $expenses
     * @return list<array{id: string, name: string, price: float}>
     */
    public function normalizeExtraExpenses(array $expenses): array
    {
        $normalized = [];

        foreach ($expenses as $expense) {
            if (! is_array($expense)) {
                continue;
            }

            $name = trim((string) ($expense['name'] ?? ''));
            $price = $this->money(max(0, (float) ($expense['price'] ?? 0)));
            if ($name === '' && $price <= 0) {
                continue;
            }

            $normalized[] = [
                'id' => (string) ($expense['id'] ?? uniqid('exp_', true)),
                'name' => $name !== '' ? $name : 'مصروف',
                'price' => $price,
            ];
        }

        return $normalized;
    }

    protected function money(float $amount): float
    {
        return round($amount, 3);
    }
}
