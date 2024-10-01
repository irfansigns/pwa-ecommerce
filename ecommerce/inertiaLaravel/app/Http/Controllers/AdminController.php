<?php

namespace App\Http\Controllers;
use Image;
use Inertia\Inertia;
use App\Models\Pimage;
use App\Models\Category;
use App\Models\Odetail;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Admin;
use Illuminate\Support\Facades\Storage;

class AdminController extends Controller
{
    public function index()
    {
        return Inertia::render('AdminDash');
    }

    public function login(Request $request){
        $credentials = $request->only('email','password');

        if(Auth::guard('admin')->attempt($credentials, $request->remember)){
            $user = Admin::where('email',$request->email)->first();
            Auth::guard('admin')->login($user);
            return redirect()->route('admin');
        }
        return redirect()->route('admin.login');
    }

    public function showLogin()
    {
        return Inertia::render('admin/AdminLogin');
    }

    public function addProduct()
    {
        $category = Category::all();
        return Inertia::render('NewApp/Product', [
            'category' => $category->map(function ($category) {
                return [
                    'id' => $category->id,
                    'catname' => $category->cname,
                ];
            }),
            'product'=> new Product,
            'submitUrl'=> '/products'
            
        ]);
    }

    public function storeProduct(Request $request){
        $this->validate($request ,[
            'name' => ['required'],
            'quantity' => ['required' , 'integer'],
            'price' => 'required|numeric|gt:4500',
            'category' =>['required'],
            'thumbnail' => ['image'],
            'featured' => ['required']
        ]);    
        $product = new Product();

        if($request->hasFile('thumbnail')){
            // $thumbnail = $request->thumbnail->store('img','public');  New Method
            $allowedfileExtension=['pdf','jpg','png','jpeg'];
            $mfile = $request->file('thumbnail');
            $mfilename = $mfile->getClientOriginalName();
            $mextension = $mfile->getClientOriginalExtension();
            $check=in_array($mextension,$allowedfileExtension);

            
                $location = storage_path('app\\public\\img\\'.$mfilename);
                Image::make($mfile)->save($location);
            
        }

        $product->pname = $request->name;
        $product->qty = $request->quantity;
        $product->price = $request->price;
        $product->category_id = $request->category;
        $product->featured = $request->featured;
        $product->i_path = $mfilename;
        
        $product->save();

        if($request->IoFiles){
            $files = $request->IoFiles;
            foreach($files as $file){
                $filename = $file->getClientOriginalName();
                $extension = $file->getClientOriginalExtension();
                $location = storage_path('app\\public\\img\\'.$filename);
                Image::make($file)->save($location);
                $check=in_array($extension,$allowedfileExtension);
                if($check){
                    $pimage = new Pimage;
                    $pimage->name = $filename;
                    $pimage->product()->associate($product);
                    $pimage->save();
                }
            }
        }
        // return redirect()->route('products.index');
        return "New Product Saved Successfully";
    }

    public function delProduct(Request $request,$id)
    {
        $product = Product::find($id);
        $product->delete();
        return $id;
    }

    public function watch(Product $product)
    {
        if($file = fopen(base_path().'/storage/app/'.$product->id.'.txt','r')){
            // dd('fileopened');
           $desc = fread($file,"500");
           fclose($file);

        } else { $desc = null; }
        $category = Category::all();
        return Inertia::render('NewApp/Product', [
            'category' => $category->map(function ($category) {
                return [
                    'id' => $category->id,
                    'catname' => $category->cname,
                ];
            }),
            'description'=>$desc,
            'product'=>$product,
            'submitUrl'=>'/updateProduct/'.$product->id,
            // 'method'=>'PUT'
        ]);
    }

    public function ProductUpdate(Request $request, $id)
    {
        $this->validate($request ,[
            'name' => ['required'],
            'quantity' => ['required' , 'integer'],
            // 'price' => 'required|numeric|gt:4500',
            'price' => 'required|numeric|gt:4500',
            'category' =>['required'],
            

            
        ]);    
        $product = Product::find($id);
        
        if($request->hasFile('thumbnail')){
            // $thumbnail = $request->thumbnail->store('img','public');  New Method
            $allowedfileExtension=['pdf','jpg','png'];
            $mfile = $request->file('thumbnail');
            $mfilename = $mfile->getClientOriginalName();
            $mextension = $mfile->getClientOriginalExtension();
            $check=in_array($mextension,$allowedfileExtension);

            if($check){
                $location = storage_path('app\\public\\img\\'.$mfilename);
                Image::make($mfile)->save($location);
            }
            $product->i_path = $mfilename;
        }
        
        // Product::create([
        //     'pname'=>$request->name,
        //     'qty'=>$request->quantity,
        //     'price'=>$request->price,
        //     'category_id'=>$request->category,
        //     'i_path' => $mfilename,
        // ]);
        $product->pname = $request->name;
        $product->qty = $request->quantity;
        $product->price = $request->price;
        $product->category_id = $request->category;
        
        
        

        $product->save();
        // Storage::disk('local')->put($product->id.'.txt', $request->description);    
        if($request->IoFiles){
            $files = $request->IoFiles;
            foreach($files as $file){
                $filename = $file->getClientOriginalName();
                $allowedfileExtension=['pdf','jpg','png'];
                $extension = $file->getClientOriginalExtension();
                $location = storage_path('app\\public\\img\\'.$filename);
                Image::make($file)->save($location);
                $check=in_array($extension,$allowedfileExtension);
                if($check){
                    $pimage = new Pimage;
                    $pimage->name = $filename;
                    $pimage->product()->associate($product);
                    $pimage->save();
                }
            }
        }
        return redirect()->route('admin');
        // return "New Product Saved Successfully";
    }
}
