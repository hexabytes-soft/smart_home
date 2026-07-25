<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('smart_components', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->string('name');
            $table->string('icon', 16)->default('●');
            $table->decimal('price', 10, 3)->default(0);
            $table->string('mount', 20)->default('wall');
            $table->string('model')->nullable();
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('smart_components');
    }
};
