<?php

use App\Http\Controllers\Auth\RegisterController;

Route::post('/register', [RegisterController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
