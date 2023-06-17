<?php

use App\Http\Controllers\BudayaController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GalleryBeritaController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\BeritaController;
use App\Http\Controllers\MuseumController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::middleware(['auth'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Dashboard routes
    Route::prefix('dashboard')->group(function () {
        Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
        Route::prefix('events')->group(function () {
            Route::get('/', [EventController::class, 'index'])->name('dashboard.events');
            Route::get('/detail', [EventController::class, 'show'])->name('dashboard.event.detail');
            Route::get('/create', [EventController::class, 'create'])->name('dashboard.event.create');
            Route::get('/edit', [EventController::class, 'edit'])->name('dashboard.event.edit');
            Route::post('/update/{id}', [EventController::class, 'update'])->name('dashboard.update.event');
            Route::post('/create', [EventController::class, 'store'])->name('dashboard.event.store');
            Route::post('/delete', [EventController::class, 'destroy'])->name('dashboard.event.destroy');
        });

        Route::prefix('berita')->group(function () {
            Route::get('/', [BeritaController::class, 'index'])->name('dashboard.berita');
            Route::get('/create', [BeritaController::class, 'create'])->name('dashboard.berita.create');
            Route::get('/edit', [BeritaController::class, 'edit'])->name('dashboard.berita.edit');
            Route::get('/detail', [BeritaController::class, 'show'])->name('dashboard.berita.detail');
            Route::post('/create', [BeritaController::class, 'store'])->name('dashboard.berita.store');
            Route::post('/update/{id}', [BeritaController::class, 'update'])->name('dashboard.beritaupdate');
            Route::post('/delete', [BeritaController::class, 'destroy'])->name('dashboard.berita.destroy');
        });

        Route::prefix('gallery/berita')->group(function () {
            Route::get('/', [GalleryBeritaController::class, 'index'])->name('dashboard.galleryberita');
            Route::get('/create', [GalleryBeritaController::class, 'create'])->name('dashboard.galleryberita.create');
            Route::post('/create', [GalleryBeritaController::class, 'store'])->name('dashboard.galleryberita.store');
        });
        

        Route::prefix('budaya')->group(function () {
            Route::get('/', [BudayaController::class, 'index'])->name('dashboard.budaya');
            Route::get('/create', [BudayaController::class, 'create'])->name('dashboard.budaya.create');
            Route::get('/edit', [BudayaController::class, 'edit'])->name('dashboard.budaya.edit');
            Route::get('/detail', [BudayaController::class, 'show'])->name('dashboard.budaya.detail');
            Route::post('/create', [BudayaController::class, 'store'])->name('dashboard.budaya.store');
            Route::post('/update/{id}', [BudayaController::class, 'update'])->name('dashboard.budaya.update');
            Route::post('/delete', [BudayaController::class, 'destroy'])->name('dashboard.budaya.destroy');
        });
    });
});

Route::get('/events', [EventController::class, 'getAllEvent'])->name('event');
Route::get('/detailevent', [EventController::class, 'detailEventPage'])->name('event.detail');
Route::get('/berita', [BeritaController::class, 'getAllBerita'])->name('berita');
Route::get('/detailberita', [BeritaController::class, 'detailBeritaPage'])->name('berita.detail');
Route::get('/museum', [MuseumController::class, 'getAllMuseum'])->name('museum');
Route::get('/detailmuseum', [MuseumController::class, 'detailMuseumPage'])->name('museum.detail');
Route::get('/budaya', [BudayaController::class, 'getBudaya'])->name('budaya');


Route::post('/kritik-saran', [HomeController::class, 'kritikSaran'])->name('home.kritiksaran');


require __DIR__ . '/auth.php';