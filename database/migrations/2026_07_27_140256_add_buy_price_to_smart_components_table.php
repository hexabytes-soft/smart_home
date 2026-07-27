<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('smart_components', function (Blueprint $table) {
            $table->decimal('buy_price', 10, 3)->default(0)->after('price');
        });
    }

    public function down(): void
    {
        Schema::table('smart_components', function (Blueprint $table) {
            $table->dropColumn('buy_price');
        });
    }
};
