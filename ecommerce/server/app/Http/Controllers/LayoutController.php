<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LayoutController extends Controller
{
    public function index($id){
        $fileNames = [];
       // $path = storage_path('app\\public\\img\\'."slider".$id);
	$path = storage_path('app/public/img/slider'.$id);
       // $path = url('/storage/img'."/slider".$id);
      // echo $path; return false;
        $files = \File::allFiles($path);

        foreach($files as $file) {
            array_push($fileNames, pathinfo($file)['filename'].".".pathinfo($file)['extension']);
        }

        return $fileNames;
    }
}
