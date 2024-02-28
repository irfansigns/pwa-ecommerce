<?php

namespace App\Http\Controllers;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function CatList(Request $request){
        $catList = Category::all();

        return $catList;
    }

    public function storeCat(Request $request){
        $cat = $request->all();
        $scat = Category::create([
            'cname' => $request->name,
            'dept' => $request->dept
        ]);

        return "Record Entered Successfully";
    }
}
