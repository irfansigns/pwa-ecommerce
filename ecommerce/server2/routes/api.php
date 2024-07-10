<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LayoutController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\User\AuthController;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\User\ResetController;
use App\Http\Controllers\User\ForgetController;
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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/products',[ProductController::class,'ProductList']);
Route::get('/productdetails/{id}',[ProductController::class, 'ProductDetails']);
Route::get('/relatedProduct/{id}',[ProductController::class, 'relatedProducts']);
Route::post('/storeOrder',[ProductController::class, 'storeOrder']);
Route::get('/shop', [ProductController::class, 'shopMain']);
Route::get('/shop/{id}', [ProductController::class, 'shopCategory']);
Route::get('/sliderImages/{id}', [LayoutController::class, 'index']);
// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Login Routes 
Route::post('/login',[AuthController::class, 'Login']);

 // Register Routes 
Route::post('/register',[AuthController::class, 'Register']);

 // Forget Password Routes 
Route::post('/forgetpassword',[ForgetController::class, 'ForgetPassword']);

 // Reset Password Routes 
Route::post('/resetpassword',[ResetController::class, 'ResetPassword']);

 // Current User Route 
Route::get('/user',[UserController::class, 'User'])->middleware('auth:api');

