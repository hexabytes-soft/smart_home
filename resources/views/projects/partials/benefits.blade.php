{{-- Expects $benefitStats from ProjectBenefitCalculator --}}
@php
    $expenses = old('extra_expenses', $benefitStats['extra_expenses'] ?? []);
    if (! is_array($expenses) || count($expenses) === 0) {
        $expenses = [['id' => 'new_1', 'name' => '', 'price' => '']];
    }
    $expenseRows = collect($expenses)->map(fn ($e) => [
        'id' => $e['id'] ?? uniqid('exp_', true),
        'name' => $e['name'] ?? '',
        'price' => isset($e['price']) && $e['price'] !== '' ? number_format((float) $e['price'], 3, '.', '') : '',
    ])->values()->all();
@endphp

<section id="benefits" class="card overflow-hidden scroll-mt-24">
    <div class="px-5 py-4 border-b border-surface-800 flex flex-wrap items-center justify-between gap-3">
        <div>
            <h3 class="text-sm font-semibold text-white">الأرباح · Benefits</h3>
            <p class="text-xs text-surface-500 mt-0.5">Sell − buy for devices, plus programming &amp; installation, minus extra expenses</p>
        </div>
        <a href="{{ route('projects.map', $project) }}" class="btn-secondary text-xs py-1.5 px-3">Open on map</a>
    </div>

    <div class="p-5 space-y-5">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div class="rounded-xl border border-surface-800 bg-surface-950/50 p-4">
                <p class="text-[11px] uppercase tracking-wider text-surface-500 mb-1">إجمالي الشراء · Bought</p>
                <p class="text-xl font-semibold text-white font-mono"><x-omr :amount="$benefitStats['total_buy']" /></p>
                <p class="text-[10px] text-surface-500 mt-1">Devices + مصاريف إضافية</p>
            </div>
            <div class="rounded-xl border border-surface-800 bg-surface-950/50 p-4">
                <p class="text-[11px] uppercase tracking-wider text-surface-500 mb-1">إجمالي البيع · Sell</p>
                <p class="text-xl font-semibold text-emerald-300 font-mono"><x-omr :amount="$benefitStats['total_sell']" /></p>
                <p class="text-[10px] text-surface-500 mt-1">Devices + برمجة + تركيب</p>
            </div>
            <div class="rounded-xl border border-brand-500/30 bg-brand-500/10 p-4">
                <p class="text-[11px] uppercase tracking-wider text-brand-300/80 mb-1">الربح · Benefit</p>
                <p class="text-xl font-semibold {{ $benefitStats['total_benefit'] >= 0 ? 'text-brand-300' : 'text-rose-300' }} font-mono">
                    <x-omr :amount="$benefitStats['total_benefit']" />
                </p>
                <p class="text-[10px] text-surface-500 mt-1">{{ $benefitStats['item_count'] }} device(s)</p>
            </div>
        </div>

        @if (count($benefitStats['lines']))
            <div class="rounded-xl border border-surface-800 overflow-hidden">
                <table class="w-full text-left text-sm">
                    <thead>
                        <tr class="text-[10px] uppercase tracking-wide text-surface-500 border-b border-surface-800 bg-surface-950/60">
                            <th class="px-3 py-2 font-medium">Item</th>
                            <th class="px-3 py-2 font-medium text-center">Qty</th>
                            <th class="px-3 py-2 font-medium text-right">Buy</th>
                            <th class="px-3 py-2 font-medium text-right">Sell</th>
                            <th class="px-3 py-2 font-medium text-right">Benefit</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-surface-800/80">
                        @foreach ($benefitStats['lines'] as $line)
                            <tr class="text-surface-200">
                                <td class="px-3 py-2.5">
                                    <span class="inline-flex items-center gap-2">
                                        <span aria-hidden="true">{{ $line['icon'] }}</span>
                                        <span>{{ $line['name'] }}</span>
                                    </span>
                                </td>
                                <td class="px-3 py-2.5 text-center">{{ $line['qty'] }}</td>
                                <td class="px-3 py-2.5 text-right font-mono text-xs"><x-omr :amount="$line['buy_total']" /></td>
                                <td class="px-3 py-2.5 text-right font-mono text-xs"><x-omr :amount="$line['sell_total']" /></td>
                                <td class="px-3 py-2.5 text-right font-mono text-xs text-brand-300"><x-omr :amount="$line['benefit']" /></td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        @else
            <p class="text-sm text-surface-500 text-center py-4">No smart devices on the map yet.</p>
        @endif

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div class="flex justify-between rounded-lg border border-surface-800 px-3 py-2.5">
                <span class="text-surface-400">سعر البرمجة / Programming</span>
                <span class="font-mono text-surface-200"><x-omr :amount="$benefitStats['programming']" /></span>
            </div>
            <div class="flex justify-between rounded-lg border border-surface-800 px-3 py-2.5">
                <span class="text-surface-400">سعر التركيب / Installation</span>
                <span class="font-mono text-surface-200"><x-omr :amount="$benefitStats['installation']" /></span>
            </div>
        </div>

        @can('editMap', $project)
            <form
                method="POST"
                action="{{ route('projects.benefits.update', $project) }}"
                class="space-y-3"
                x-data="{
                    rows: {{ \Illuminate\Support\Js::from($expenseRows) }},
                    add() { this.rows.push({ id: 'exp_' + Date.now(), name: '', price: '' }); },
                    remove(i) { this.rows.splice(i, 1); if (!this.rows.length) this.add(); }
                }"
            >
                @csrf
                @method('PUT')
                <div class="flex items-center justify-between gap-2">
                    <h4 class="text-xs font-semibold text-surface-200">مصاريف إضافية / Extra expenses</h4>
                    <button type="button" class="btn-secondary text-[10px] py-1 px-2.5" @click="add()">+ Add</button>
                </div>
                <div class="space-y-2">
                    <template x-for="(row, index) in rows" :key="row.id">
                        <div class="flex flex-wrap gap-2 items-center">
                            <input type="hidden" :name="`extra_expenses[${index}][id]`" :value="row.id">
                            <input
                                type="text"
                                :name="`extra_expenses[${index}][name]`"
                                x-model="row.name"
                                placeholder="اسم المصروف"
                                class="input-dark flex-1 min-w-[140px] text-sm"
                            >
                            <input
                                type="number"
                                min="0"
                                step="0.001"
                                :name="`extra_expenses[${index}][price]`"
                                x-model="row.price"
                                placeholder="0.000"
                                class="input-dark w-32 text-sm font-mono"
                            >
                            <button type="button" class="text-xs text-rose-400 hover:text-rose-300 px-2" @click="remove(index)">Remove</button>
                        </div>
                    </template>
                </div>
                <div class="flex justify-end">
                    <button type="submit" class="btn-primary text-xs py-2 px-4">Save expenses</button>
                </div>
            </form>
        @else
            @if (count($benefitStats['extra_expenses']))
                <div class="rounded-xl border border-surface-800 overflow-hidden">
                    <p class="px-3 py-2 text-[10px] uppercase tracking-wide text-surface-500 border-b border-surface-800 bg-surface-950/60">مصاريف إضافية</p>
                    <ul class="divide-y divide-surface-800/80">
                        @foreach ($benefitStats['extra_expenses'] as $expense)
                            <li class="flex justify-between px-3 py-2.5 text-sm">
                                <span class="text-surface-200">{{ $expense['name'] }}</span>
                                <span class="font-mono text-rose-300"><x-omr :amount="$expense['price']" /></span>
                            </li>
                        @endforeach
                    </ul>
                </div>
            @endif
        @endcan
    </div>
</section>
