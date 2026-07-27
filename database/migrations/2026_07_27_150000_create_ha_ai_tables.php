<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('ha_sync_runs', function (Blueprint $table) {
            $table->id();
            $table->string('status', 32)->default('pending');
            $table->unsignedInteger('devices_count')->default(0);
            $table->unsignedInteger('entities_count')->default(0);
            $table->unsignedInteger('areas_count')->default(0);
            $table->unsignedInteger('floors_count')->default(0);
            $table->unsignedInteger('labels_count')->default(0);
            $table->unsignedInteger('scripts_count')->default(0);
            $table->unsignedInteger('scenes_count')->default(0);
            $table->unsignedInteger('automations_count')->default(0);
            $table->text('error_message')->nullable();
            $table->timestamp('started_at')->nullable();
            $table->timestamp('finished_at')->nullable();
            $table->timestamps();
        });

        Schema::create('ha_areas', function (Blueprint $table) {
            $table->id();
            $table->string('ha_id')->unique();
            $table->string('name');
            $table->string('floor_id')->nullable()->index();
            $table->string('icon')->nullable();
            $table->json('aliases')->nullable();
            $table->json('labels')->nullable();
            $table->json('raw')->nullable();
            $table->timestamps();
        });

        Schema::create('ha_floors', function (Blueprint $table) {
            $table->id();
            $table->string('ha_id')->unique();
            $table->string('name');
            $table->integer('level')->nullable();
            $table->string('icon')->nullable();
            $table->json('aliases')->nullable();
            $table->json('raw')->nullable();
            $table->timestamps();
        });

        Schema::create('ha_labels', function (Blueprint $table) {
            $table->id();
            $table->string('ha_id')->unique();
            $table->string('name');
            $table->string('color')->nullable();
            $table->string('icon')->nullable();
            $table->string('description')->nullable();
            $table->json('raw')->nullable();
            $table->timestamps();
        });

        Schema::create('ha_devices', function (Blueprint $table) {
            $table->id();
            $table->string('ha_id')->unique();
            $table->string('name')->nullable();
            $table->string('name_by_user')->nullable();
            $table->string('manufacturer')->nullable();
            $table->string('model')->nullable();
            $table->string('area_id')->nullable()->index();
            $table->json('labels')->nullable();
            $table->json('raw')->nullable();
            $table->timestamps();
        });

        Schema::create('ha_entities', function (Blueprint $table) {
            $table->id();
            $table->string('entity_id')->unique();
            $table->string('domain')->index();
            $table->string('friendly_name')->nullable();
            $table->string('platform')->nullable();
            $table->string('device_id')->nullable()->index();
            $table->string('area_id')->nullable()->index();
            $table->string('state')->nullable();
            $table->json('attributes')->nullable();
            $table->json('labels')->nullable();
            $table->boolean('disabled')->default(false);
            $table->json('raw')->nullable();
            $table->timestamp('state_changed_at')->nullable();
            $table->timestamps();
        });

        Schema::create('ha_scripts', function (Blueprint $table) {
            $table->id();
            $table->string('entity_id')->unique();
            $table->string('friendly_name')->nullable();
            $table->string('state')->nullable();
            $table->json('attributes')->nullable();
            $table->json('raw')->nullable();
            $table->timestamps();
        });

        Schema::create('ha_scenes', function (Blueprint $table) {
            $table->id();
            $table->string('entity_id')->unique();
            $table->string('friendly_name')->nullable();
            $table->string('state')->nullable();
            $table->json('attributes')->nullable();
            $table->json('raw')->nullable();
            $table->timestamps();
        });

        Schema::create('ha_automations_remote', function (Blueprint $table) {
            $table->id();
            $table->string('entity_id')->unique();
            $table->string('friendly_name')->nullable();
            $table->string('state')->nullable();
            $table->string('ha_automation_id')->nullable()->index();
            $table->json('attributes')->nullable();
            $table->json('raw')->nullable();
            $table->timestamps();
        });

        Schema::create('ha_component_mappings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('project_id')->constrained()->cascadeOnDelete();
            $table->string('map_device_id');
            $table->string('component_key');
            $table->string('entity_id');
            $table->string('room_name')->nullable();
            $table->timestamps();

            $table->unique(['project_id', 'map_device_id']);
            $table->index(['project_id', 'entity_id']);
        });

        Schema::create('ha_project_automations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('project_id')->constrained()->cascadeOnDelete();
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
            $table->string('name')->nullable();
            $table->string('description')->nullable();
            $table->string('status', 32)->default('draft')->index();
            $table->json('selected_map_device_ids')->nullable();
            $table->longText('prompt')->nullable();
            $table->longText('yaml');
            $table->string('ha_automation_id')->nullable();
            $table->text('error_message')->nullable();
            $table->timestamp('uploaded_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('ha_project_automations');
        Schema::dropIfExists('ha_component_mappings');
        Schema::dropIfExists('ha_automations_remote');
        Schema::dropIfExists('ha_scenes');
        Schema::dropIfExists('ha_scripts');
        Schema::dropIfExists('ha_entities');
        Schema::dropIfExists('ha_devices');
        Schema::dropIfExists('ha_labels');
        Schema::dropIfExists('ha_floors');
        Schema::dropIfExists('ha_areas');
        Schema::dropIfExists('ha_sync_runs');
    }
};
