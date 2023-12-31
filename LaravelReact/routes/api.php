<?php

use App\Http\Controllers\TaskController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/tasks/{name?}', [TaskController::class, 'tasks']);

Route::post('/store', [TaskController::class, 'store']);
Route::get('/edit/{id}', [TaskController::class, 'edit']);
Route::put('/update/{id}', [TaskController::class, 'update']);
Route::delete('/delete/{id}', [TaskController::class, 'delete']);
