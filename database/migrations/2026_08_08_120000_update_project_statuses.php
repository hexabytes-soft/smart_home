<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        $driver = Schema::getConnection()->getDriverName();

        if ($driver === 'mysql') {
            DB::statement("ALTER TABLE projects MODIFY status VARCHAR(32) NOT NULL DEFAULT 'draft'");
        } elseif ($driver === 'pgsql') {
            DB::statement('ALTER TABLE projects ALTER COLUMN status TYPE VARCHAR(32) USING status::text');
            DB::statement("ALTER TABLE projects ALTER COLUMN status SET DEFAULT 'draft'");
        }

        DB::table('projects')->where('status', 'published')->update(['status' => 'in_progress']);
        DB::table('projects')->where('status', 'archived')->update(['status' => 'trash']);
    }

    public function down(): void
    {
        DB::table('projects')->where('status', 'in_progress')->update(['status' => 'published']);
        DB::table('projects')->where('status', 'trash')->update(['status' => 'archived']);
        DB::table('projects')
            ->whereNotIn('status', ['draft', 'published', 'archived'])
            ->update(['status' => 'draft']);

        if (Schema::getConnection()->getDriverName() === 'mysql') {
            DB::statement("ALTER TABLE projects MODIFY status ENUM('draft','published','archived') NOT NULL DEFAULT 'draft'");
        }
    }
};
