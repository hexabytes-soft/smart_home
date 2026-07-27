<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'resend' => [
        'key' => env('RESEND_KEY'),
    ],

    'slack' => [
        'notifications' => [
            'bot_user_oauth_token' => env('SLACK_BOT_USER_OAUTH_TOKEN'),
            'channel' => env('SLACK_BOT_USER_DEFAULT_CHANNEL'),
        ],
    ],

    'gemini' => [
        'api_key' => env('GEMINI_API_KEY'),
        'api_version' => env('GEMINI_API_VERSION', 'v1beta'),
        'model' => env('GEMINI_MODEL', 'gemini-2.5-flash'),
        'fallback_models' => array_values(array_filter(array_map(
            'trim',
            explode(',', (string) env('GEMINI_FALLBACK_MODELS', 'gemini-flash-lite-latest,gemini-2.5-flash'))
        ))),
        'timeout' => (int) env('GEMINI_TIMEOUT', 120),
        'connect_timeout' => (int) env('GEMINI_CONNECT_TIMEOUT', 20),
        'retries' => (int) env('GEMINI_RETRIES', 2),
        'max_output_tokens' => (int) env('GEMINI_MAX_OUTPUT_TOKENS', 32768),
        'thinking_budget' => (int) env('GEMINI_THINKING_BUDGET', 0),
    ],

    'ha_ai' => [
        'password' => env('HA_AI_PASSWORD'),
    ],

    'home_assistant' => [
        'url' => rtrim((string) env('HOME_ASSISTANT_URL', ''), '/'),
        'token' => env('HOME_ASSISTANT_TOKEN'),
        'timeout' => (int) env('HOME_ASSISTANT_TIMEOUT', 60),
    ],

];
