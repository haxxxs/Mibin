<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TrashController;
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

Route::get('/Profile', function () {
    return Inertia::render('Profile');
});

Route::get('/RequestForm', function () {
    return Inertia::render('RequestForm');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::get('/trash', [TrashController::class, 'index'])->name('trash_index');
Route::get('/get_adresses', [TrashController::class, 'get_adresses'])->name('get_adresses');
Route::post('/trash', [TrashController::class, 'store'])->name('trash_store');
Route::get('/trash/{thiscity}', [TrashController::class, 'trashByCity']);

Route::get('/test', function () {
    return view("trash_store");
});

Route::get('/maps', function () {
    return view("maps123");
});

Route::get('/trash_cr', function () {
    return view("trash_create");
});
Route::post('/trash', [TrashController::class, 'store'])->name('trash.store');

Route::get('/address', function () {
    return view("address");
});
