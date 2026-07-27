@extends('layouts.ha-ai')

@section('title', 'Explain')

@section('content')
    <a href="javascript:history.back()" class="text-xs text-surface-500 hover:text-brand-300">← Back</a>
    <h1 class="text-xl font-bold text-white mt-2">{{ $result['title'] }}</h1>
    <p class="text-[11px] text-surface-500 mt-1 uppercase">{{ $type }} · {{ $key }}</p>
    <div class="card p-5 mt-4 text-sm text-surface-200 whitespace-pre-wrap leading-relaxed">{{ $result['explanation'] }}</div>
@endsection
