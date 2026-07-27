<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('ha_project_chat_messages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('project_id')->constrained()->cascadeOnDelete();
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
            $table->string('role', 16); // user|assistant|system
            $table->longText('content');
            $table->timestamps();

            $table->index(['project_id', 'id']);
        });

        Schema::create('ha_automation_versions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('ha_project_automation_id')->constrained('ha_project_automations')->cascadeOnDelete();
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
            $table->unsignedInteger('version_number');
            $table->string('name')->nullable();
            $table->longText('yaml');
            $table->string('change_summary')->nullable();
            $table->timestamps();

            $table->unique(['ha_project_automation_id', 'version_number'], 'ha_auto_versions_unique');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('ha_automation_versions');
        Schema::dropIfExists('ha_project_chat_messages');
    }
};
