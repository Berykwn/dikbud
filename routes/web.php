<?php

use App\Http\Controllers\BudayaController;
use App\Http\Controllers\CarouselController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GalleryBeritaController;
use App\Http\Controllers\PegawaiController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GambarBudayaController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\BeritaController;
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
        Route::prefix('banner')->group((function () {
            Route::get('/', [CarouselController::class, 'index'])->name('dashboard.carousel');
            Route::get('/create', [CarouselController::class, 'create'])->name('dashboard.carousel.create');
            Route::post('/create', [CarouselController::class, 'store'])->name('dashboard.carousel.store');
            Route::get('/edit', [CarouselController::class, 'edit'])->name('dashboard.carousel.edit');
            Route::post('/update/{id}', [CarouselController::class, 'update'])->name('dashboard.carousel.update');

        }));

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
            Route::post('/delete', [GalleryBeritaController::class, 'destroy'])->name('dashboard.galleryberita.destroy');
        });

        Route::prefix('gallery/budaya')->group(function () {
            Route::get('/', [GambarBudayaController::class, 'index'])->name('dashboard.gallery.budaya');
            Route::get('/create', [GambarBudayaController::class, 'create'])->name('dashboard.gallery.budaya.create');
            Route::post('/create', [GambarBudayaController::class, 'store'])->name('dashboard.gallery.budaya.store');
            Route::post('/delete', [GambarBudayaController::class, 'destroy'])->name('dashboard.gallery.budaya.destroy');
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

        Route::prefix('pegawai')->group(function () {
            Route::get('/', [PegawaiController::class, 'index'])->name('dashboard.pegawai');
            Route::get('/create', [PegawaiController::class, 'create'])->name('dashboard.pegawai.create');
            Route::post('/create', [PegawaiController::class, 'store'])->name('dashboard.pegawai.store');
            Route::get('/edit', [PegawaiController::class, 'edit'])->name('dashboard.pegawai.edit');
            Route::post('/update/{id}', [PegawaiController::class, 'update'])->name('dashboard.pegawai.update');
            Route::post('/delete', [PegawaiController::class, 'destroy'])->name('dashboard.pegawai.destroy');
        });
    });
});

Route::get('/events', [EventController::class, 'getAllEvent'])->name('event');
Route::get('/detailevent', [EventController::class, 'detailEventPage'])->name('event.detail');
Route::get('/berita', [BeritaController::class, 'getAllBerita'])->name('berita');
Route::get('/detailberita', [BeritaController::class, 'detailBeritaPage'])->name('berita.detail');
Route::get('/budaya', [BudayaController::class, 'getBudaya'])->name('budaya');
Route::get('/detailbudaya', [BudayaController::class, 'detailBudayaPage'])->name('budaya.detail');
Route::get('/pegawai', [PegawaiController::class, 'pegawaiPage'])->name('pegawai');

Route::post('/kritik-saran', [HomeController::class, 'kritikSaran'])->name('home.kritiksaran');


require __DIR__ . '/auth.php';