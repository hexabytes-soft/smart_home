<?php

use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ProjectShareController;
use App\Http\Controllers\SmartComponentController;
use App\Http\Controllers\StorefrontController;
use App\Models\Project;
use Illuminate\Support\Facades\Route;

Route::prefix('view')->name('share.')->group(function () {
    Route::get('{token}', [ProjectShareController::class, 'gate'])->name('gate');
    Route::post('{token}/unlock', [ProjectShareController::class, 'unlock'])
        ->middleware('throttle:10,1')
        ->name('unlock');
    Route::get('{token}/plan', [ProjectShareController::class, 'viewPlan'])->name('viewPlan');
    Route::get('{token}/360', [ProjectShareController::class, 'view360'])->name('view360');
    Route::get('{token}/data', [ProjectShareController::class, 'data'])->name('data');
});

Route::get('/shop', [StorefrontController::class, 'index'])->name('shop.index');
Route::get('/shop/{product}', [StorefrontController::class, 'show'])->name('shop.show');

Route::get('/', function () {
    return auth()->check()
        ? redirect()->route('dashboard')
        : redirect()->route('shop.index');
});

Route::get('/dashboard', function () {
    $user = auth()->user();

    $projectsQuery = Project::query()->latest();

    if (! $user->hasAnyRole(['admin', 'manager'])) {
        $projectsQuery->where('user_id', $user->id);
    }

    $stats = [
        'projects' => (clone $projectsQuery)->count(),
        'published' => (clone $projectsQuery)->where('status', 'published')->count(),
        'drafts' => (clone $projectsQuery)->where('status', 'draft')->count(),
    ];

    $recentProjects = $projectsQuery->take(6)->get();

    return view('dashboard', compact('stats', 'recentProjects'));
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('projects', ProjectController::class);
    Route::resource('products', ProductController::class);
    Route::resource('smart-components', SmartComponentController::class)->except(['show']);
    Route::patch('smart-components/{smart_component}/price', [SmartComponentController::class, 'updatePrice'])
        ->name('smart-components.updatePrice');
    Route::get('projects/{project}/map', [ProjectController::class, 'map'])->name('projects.map');
    Route::put('projects/{project}/map', [ProjectController::class, 'updateMap'])->name('projects.map.update');
    Route::put('projects/{project}/benefits', [ProjectController::class, 'updateBenefits'])->name('projects.benefits.update');
    Route::post('projects/{project}/map/import-plan', [ProjectController::class, 'importFloorPlan'])
        ->name('projects.map.import');
    Route::post('projects/{project}/map/import-json', [ProjectController::class, 'importFloorPlanJson'])
        ->name('projects.map.importJson');
    Route::post('projects/{project}/map/underlay', [ProjectController::class, 'uploadUnderlay'])
        ->name('projects.map.underlay');
    Route::put('projects/{project}/share', [ProjectShareController::class, 'update'])
        ->name('projects.share.update');

    Route::middleware('role:admin|manager')->prefix('admin')->name('admin.')->group(function () {
        Route::resource('users', UserController::class)->except(['show']);
    });
});

require __DIR__.'/auth.php';
require __DIR__.'/ha-ai.php';
