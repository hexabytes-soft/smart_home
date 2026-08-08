<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->enum('type', ['home', 'building', 'apartment', 'office'])->default('home');
            $table->string('status', 32)->default('draft');
            $table->enum('map_mode', ['2d', '3d', '360'])->default('3d');
            $table->unsignedInteger('width')->default(20)->comment('Map width in meters');
            $table->unsignedInteger('depth')->default(15)->comment('Map depth in meters');
            $table->unsignedInteger('floors_count')->default(1);
            $table->json('map_data')->nullable()->comment('Walls, doors, rooms, camera, assets');
            $table->string('thumbnail_path')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
