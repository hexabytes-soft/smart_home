<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('smart_components', function (Blueprint $table) {
            $table->string('unit', 20)->default('piece')->after('buy_price');
        });
    }

    public function down(): void
    {
        Schema::table('smart_components', function (Blueprint $table) {
            $table->dropColumn('unit');
        });
    }
};
