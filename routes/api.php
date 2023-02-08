<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UsersController;
use App\Http\Controllers\PaymentsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Получение списка выплат
Route::get('/v1/admin/payments/get-list', [PaymentsController::class, 'getList'])->middleware('auth.api:admin');

// Создание выплаты
Route::post('/v1/admin/payments/create', [PaymentsController::class, 'createPayment'])->middleware('auth.api:admin');

// Изменение статуса выплаты
Route::post('/v1/admin/payments/status-update', [PaymentsController::class, 'updateStatus'])->middleware('auth.api:admin');

// Регистрация пользователя в роли администратора (Просто, чтобы создать пользователя)
Route::post('/v1/admin/users/create', [UsersController::class, 'createUser']);
