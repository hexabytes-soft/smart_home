<?php

use App\Http\Controllers\HaAi\AuthController;
use App\Http\Controllers\HaAi\AutomationController;
use App\Http\Controllers\HaAi\ChatController;
use App\Http\Controllers\HaAi\DeviceController;
use App\Http\Controllers\HaAi\InsightController;
use App\Http\Controllers\HaAi\KnowledgeController;
use App\Http\Controllers\HaAi\MappingController;
use App\Http\Controllers\HaAi\ProjectController;
use App\Http\Controllers\HaAi\SyncController;
use App\Http\Controllers\HaAi\ToolsController;
use Illuminate\Support\Facades\Route;

Route::prefix('ha-ai')->name('ha-ai.')->middleware(['auth', 'verified', 'role:admin|manager'])->group(function () {
    Route::get('login', [AuthController::class, 'showLogin'])->name('login');
    Route::post('login', [AuthController::class, 'login'])->name('login.submit')->middleware('throttle:10,1');
    Route::post('logout', [AuthController::class, 'logout'])->name('logout');

    Route::middleware('ha_ai')->group(function () {
        Route::get('/', [ProjectController::class, 'index'])->name('index');
        Route::get('projects/{project:slug}', [ProjectController::class, 'show'])->name('projects.show');

        Route::post('connection-test', [SyncController::class, 'test'])->name('connection.test')->middleware('throttle:20,1');
        Route::post('sync', [SyncController::class, 'sync'])->name('sync')->middleware('throttle:5,1');

        Route::get('projects/{project:slug}/devices', [DeviceController::class, 'index'])->name('devices');
        Route::get('projects/{project:slug}/knowledge', [KnowledgeController::class, 'edit'])->name('knowledge.edit');
        Route::put('projects/{project:slug}/knowledge', [KnowledgeController::class, 'update'])->name('knowledge.update');
        Route::get('projects/{project:slug}/mapping', [MappingController::class, 'index'])->name('mapping');
        Route::post('projects/{project:slug}/mappings', [MappingController::class, 'store'])->name('mappings.store');
        Route::delete('projects/{project:slug}/mappings/{mapping}', [MappingController::class, 'destroy'])->name('mappings.destroy');

        Route::get('projects/{project:slug}/chat', [ChatController::class, 'index'])->name('chat');
        Route::post('projects/{project:slug}/chat', [ChatController::class, 'store'])->name('chat.store')->middleware('throttle:20,1');

        Route::get('projects/{project:slug}/library/{type}', [InsightController::class, 'library'])->name('library');
        Route::post('projects/{project:slug}/explain', [InsightController::class, 'explain'])->name('explain')->middleware('throttle:15,1');
        Route::post('projects/{project:slug}/automations/{automation}/debug', [InsightController::class, 'debug'])->name('automations.debug')->middleware('throttle:10,1');
        Route::match(['get', 'post'], 'projects/{project:slug}/automations/{automation}/simulate', [InsightController::class, 'simulate'])->name('automations.simulate');
        Route::get('projects/{project:slug}/automations/{automation}/versions', [InsightController::class, 'versions'])->name('automations.versions');
        Route::get('projects/{project:slug}/automations/{automation}/versions/compare', [InsightController::class, 'compareVersions'])->name('automations.versions.compare');
        Route::post('projects/{project:slug}/automations/{automation}/versions/{version}/restore', [InsightController::class, 'restoreVersion'])->name('automations.versions.restore');

        Route::get('projects/{project:slug}/health', [ToolsController::class, 'health'])->name('health');
        Route::get('projects/{project:slug}/optimizer', [ToolsController::class, 'optimizer'])->name('optimizer')->middleware('throttle:5,1');
        Route::get('projects/{project:slug}/search', [ToolsController::class, 'search'])->name('search');
        Route::get('projects/{project:slug}/backup/export', [ToolsController::class, 'backupExport'])->name('backup.export');
        Route::post('projects/{project:slug}/backup/import', [ToolsController::class, 'backupImport'])->name('backup.import');
        Route::get('projects/{project:slug}/logs', [ToolsController::class, 'logs'])->name('logs');
        Route::post('projects/{project:slug}/logs/ask', [ToolsController::class, 'logsAsk'])->name('logs.ask')->middleware('throttle:10,1');

        Route::get('projects/{project:slug}/automations', [AutomationController::class, 'index'])->name('automations.index');
        Route::get('projects/{project:slug}/automations/builder', [AutomationController::class, 'builder'])->name('automations.builder');
        Route::post('projects/{project:slug}/automations/analyze', [AutomationController::class, 'analyze'])
            ->name('automations.analyze')
            ->middleware('throttle:10,1');
        Route::get('projects/{project:slug}/automations/analysis', [AutomationController::class, 'analysis'])
            ->name('automations.analysis');
        Route::post('projects/{project:slug}/automations/decide', [AutomationController::class, 'decide'])
            ->name('automations.decide')
            ->middleware('throttle:10,1');
        Route::post('projects/{project:slug}/automations/generate', [AutomationController::class, 'analyze'])
            ->name('automations.generate')
            ->middleware('throttle:10,1');
        Route::get('projects/{project:slug}/automations/{automation}', [AutomationController::class, 'show'])->name('automations.show');
        Route::post('projects/{project:slug}/automations/{automation}/regenerate', [AutomationController::class, 'regenerate'])
            ->name('automations.regenerate')
            ->middleware('throttle:10,1');
        Route::post('projects/{project:slug}/automations/{automation}/upload', [AutomationController::class, 'upload'])
            ->name('automations.upload')
            ->middleware('throttle:10,1');
        Route::post('projects/{project:slug}/automations/{automation}/clone', [AutomationController::class, 'clone'])
            ->name('automations.clone');
        Route::get('projects/{project:slug}/automations/{automation}/download', [AutomationController::class, 'download'])
            ->name('automations.download');
    });
});
