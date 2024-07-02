<?php

use App\Http\Controllers\ProfileController as Profile;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
  return Inertia::render('Landing', [
    'canLogin' => Route::has('login'),
    'canRegister' => Route::has('register'),
    'laravelVersion' => Application::VERSION,
    'phpVersion' => PHP_VERSION,
  ]);
});

Route::get('/dashboard', function () {
  return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
  Route::prefix('profile')->name('profile.')->group(function () {
    Route::get('/', [Profile::class, 'edit'])->name('edit');
    Route::patch('/', [Profile::class, 'update'])->name('update');
    Route::delete('/', [Profile::class, 'destroy'])->name('destroy');
  });
});

require __DIR__ . '/auth.php';
