<?php

use App\Http\Controllers\CityController;
use App\Http\Controllers\ContratistaController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PartnerController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TypeController;
use App\Http\Controllers\UserPartnersController;
use App\Http\Controllers\UserServices;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
Route::post('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::prefix('profile')->group(function() {
        Route::get('/{userId}', [ProfileController::class, 'view'])->name('profile.view');
    });
});

Route::middleware('auth')->group(function () {
    Route::prefix('contratistas')->group(function() {
        Route::get('/', [ContratistaController::class, 'index'])->name('contratista.index');
        Route::get('/create', [ContratistaController::class, 'create'])->name('contratista.create');
        Route::get('/search/{document?}', [ContratistaController::class, 'search'])->name('contratista.search');
        Route::post('/store', [ContratistaController::class, 'store'])->name('contratista.store');
        Route::get('/edit/{userId}', [ContratistaController::class, 'edit'])->name('contratista.edit');
        Route::post('/update/{userId}', [ContratistaController::class, 'updateContratista'])->name('contratista.update');
    });

    Route::prefix('profile')->group(function() {
        Route::get('/{userId}', [ProfileController::class, 'view'])->name('profile.view');
        Route::get('/', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });

    Route::prefix('userServices')->group(function() {
        Route::post('/update/{userId}', [UserServices::class, 'update'])->name('user.services.update');
    });

    Route::prefix('partner')->group(function() {
        Route::get('/', [PartnerController::class, 'index'])->name('partner');
        Route::get('/edit/{partnerId}', [PartnerController::class, 'edit'])->name('partner.edit');
        Route::get('/create', [PartnerController::class, 'create'])->name('partner.create');
        Route::post('/store', [PartnerController::class, 'store'])->name('partner.store');
        Route::post('/update/{partnerId}', [PartnerController::class, 'update'])->name('partner.update');
        Route::delete('/{partnerId}', [PartnerController::class, 'destroy'])->name('partner.destroy');
    });

    Route::prefix('partner_user')->group(function() {
        Route::post('/update/{userId}', [UserPartnersController::class, 'update'])->name('user_partners.update');
    });

    Route::get('/types/all', [TypeController::class, 'index'])->name('types.all');
    Route::get('/state/{stateId}/cities', [CityController::class, 'index'])->name('cities.all');
});

require __DIR__.'/auth.php';
