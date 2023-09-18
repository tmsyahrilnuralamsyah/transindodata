<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [UserController::class, 'daftar'])->name('daftar');
Route::post('/tambah', [UserController::class, 'tambah'])->name('tambah');

Route::get('/login', [LoginController::class, 'showLogin'])->name('login');
Route::post('/login', [LoginController::class, 'doLogin'])->name('login');
Route::get('/logout', [LoginController::class, 'logout'])->name('logout');

Route::group(['middleware' => ['auth', 'admin']], function() {
    Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('dashboard');
    Route::put('/ubahHarga/{id}', [AdminController::class, 'ubahHarga'])->name('ubahHarga');
    Route::put('/konfirmasi/{id}', [AdminController::class, 'konfirmasi'])->name('konfirmasi');
    Route::delete('/hapus/{id}', [AdminController::class, 'hapus'])->name('hapus');
});