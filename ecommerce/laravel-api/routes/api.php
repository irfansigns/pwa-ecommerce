<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('posts', PostController::class);

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::get('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

Route::get('/', function(){
    return 'Welcome';
});

Route::get('/products',[ProductController::class,'ProductList']);
Route::get('/productdetails/{id}',[ProductController::class, 'ProductDetails']);
Route::get('/relatedProduct/{id}',[ProductController::class, 'relatedProducts']);
Route::post('/storeOrder',[ProductController::class, 'storeOrder']);
Route::get('/shop', [ProductController::class, 'shopMain']);
Route::get('/shop/{id}', [ProductController::class, 'shopCategory']);
Route::get('/brands/{id}', [ProductController::class, 'brandSearch']);