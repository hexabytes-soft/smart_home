@props([
    'amount' => null,
    'decimals' => 3,
    'showCode' => false,
])

@php
    $formatted = $amount === null
        ? null
        : number_format((float) $amount, $decimals);
    $symbolUrl = asset('images/omr-symbol.png');
@endphp

<span {{ $attributes->merge(['class' => 'omr-amount inline-flex items-center gap-1 whitespace-nowrap']) }}>
    <span
        class="omr-symbol"
        role="img"
        aria-label="OMR"
        style="--omr-mask: url('{{ $symbolUrl }}')"
    ></span>
    @if ($formatted !== null)
        <span>{{ $formatted }}</span>
    @endif
    @if ($showCode)
        <span class="sr-only">OMR</span>
    @endif
</span>
