@extends('layouts.ha-ai')

@section('title', 'Debug')

@section('content')
    <a href="{{ route('ha-ai.automations.show', [$project, $automation]) }}" class="text-xs text-surface-500 hover:text-brand-300">← Automation</a>
    <h1 class="text-xl font-bold text-white mt-2">{{ $result['title'] }}</h1>
    <div class="card p-5 mt-4 text-sm text-surface-200 whitespace-pre-wrap leading-relaxed">{{ $result['report'] }}</div>
@endsection
