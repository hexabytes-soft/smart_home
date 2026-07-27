<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('ha_project_knowledge', function (Blueprint $table) {
            $table->id();
            $table->foreignId('project_id')->unique()->constrained()->cascadeOnDelete();
            $table->longText('house_description')->nullable();
            $table->longText('customer_preferences')->nullable();
            $table->longText('device_naming_conventions')->nullable();
            $table->longText('automation_rules')->nullable();
            $table->longText('preferred_behaviors')->nullable();
            $table->longText('notes')->nullable();
            $table->longText('constraints')->nullable();
            $table->longText('installed_integrations')->nullable();
            $table->longText('network_protocols')->nullable()->comment('Zigbee / Z-Wave / WiFi info');
            $table->longText('esphome_devices')->nullable();
            $table->longText('energy_preferences')->nullable();
            $table->longText('security_preferences')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('ha_project_knowledge');
    }
};
