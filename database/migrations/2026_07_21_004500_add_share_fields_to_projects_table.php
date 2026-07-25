<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            if (! Schema::hasColumn('projects', 'share_token')) {
                $table->uuid('share_token')->nullable()->unique()->after('thumbnail_path');
            }
            if (! Schema::hasColumn('projects', 'share_password')) {
                $table->string('share_password')->nullable()->after('share_token');
            }
            if (! Schema::hasColumn('projects', 'share_enabled')) {
                $table->boolean('share_enabled')->default(false)->after('share_password');
            }
        });
    }

    public function down(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->dropColumn(['share_token', 'share_password', 'share_enabled']);
        });
    }
};
