<?php

// use App\Http\Controllers\ProfileController;
// use Illuminate\Foundation\Application;
// use Illuminate\Support\Facades\Route;
// use Inertia\Inertia;

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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// require __DIR__.'/auth.php';





use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PayOrderController;
use App\Http\Controllers\User\UserController;

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
Route::get('/', [ProductController::class, 'index'])->name('basePath');

Route::get('/product/addCart/{id}', [ProductController::class, 'addToCart'])->name('product.addCart');
Route::get('/product/watch/{product}', [AdminController::class, 'watch'])->name('product.watch');
//      Admin Routes
Route::get('/admin',[AdminController::class,'index'])->name('admin')->middleware('admin.auth');
Route::get('/adminlogin',[AdminController::class,'showLogin'])->name('admin.login');
Route::post('/adminlogged',[AdminController::class,'login'])->name('admin.logged');
// Current User Route
Route::get('/user',[UserController::class, 'User'])->middleware('auth:api');
Route::get('/user',[UserController::class, 'User']);
// Route::get('/delProduct/{$id}',[ProductController::class,'delProduct'])->name('delProduct');
Route::get('/delProduct{id}', [AdminController::class,'delProduct'])->name('delProduct');
Route::post('/updateProduct/{id}', [AdminController::class,'ProductUpdate'])->name('updateProduct');
Route::get('/add', [AdminController::class,'addProduct'])->name('addProduct');
Route::post('/nproduct', [AdminController::class,'storeProduct'])->name('storeProduct');
Route::post('/ncategory', [CategoryController::class,'storeCat'])->name('storeCategory');
Route::get('/testEffect',[ProductController::class,'testEffect'])->name('testEffect');
Route::get('/description{id}',[ProductController::class,'description'])->name('prod.des');
Route::get('/test{id}',[ProductController::class,'testFunction'])->name('testRoute');
Route::get('/test{id}',[ProductController::class,'shopCategory'])->name('showCat');
// Route::get('pay',[PayOrderController::class,'store']);
