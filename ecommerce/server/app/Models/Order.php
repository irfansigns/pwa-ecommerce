<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable = ["id","user_id","payment_id"];

    public function product(){
    	return $this->belongsToMany(Product::class);
    }
}
