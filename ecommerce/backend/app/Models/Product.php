<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = ["pname","price","qty","i_path","category_id","featured"];
    public function category(){
    	return $this->belongsTo(Category::class);
    }

    public function pimages(){

    	return $this->hasMany(Pimage::class);
    }

    public function order(){
        return $this->belongsToMany(Order::class);
    }
}
