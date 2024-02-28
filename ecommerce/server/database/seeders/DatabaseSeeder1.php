<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Product;
use App\Models\Pimage;
use Illuminate\Support\Facades\Storage;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        
        \App\Models\User::factory()->create([
            'name' => 'Irfan Asim',
            'email' => 'irfansigns@gmail.com',
            'password' => \bcrypt('password'),
        ]);

        \App\Models\Admin::factory()->create([
            'name' => 'Sameer Jan',
            'email' => 'sameer@gmail.com',
            'password' => \bcrypt('password'),
        ]);

        // Storage::disk('local')->put($product.'.txt', 'Product Description');
        
        for ($i = 1; $i <= 80; $i++) {
            Storage::disk('local')->put($i.'.txt', 'Product Description for this product');
        }

        
        // Define categories and their products with details
        $categoriesWithProducts = [
            [
                'cname' => 'Accessories',
                'dept'  => '1', // Example department
                'products' => [
                    [
                        'pname' => 'Air Buds With Torch',
                        'price' => 1200,
                        'qty' => 20,
                        'i_path' => 'accessories/airTorch.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],

                    [
                        'pname' => 'AV Cable',
                        'price' => 300,
                        'qty' => 20,
                        'i_path' => 'accessories/avCable.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],

                    [
                        'pname' => 'Flexible Handsfree',
                        'price' => 500,
                        'qty' => 20,
                        'i_path' => 'accessories/blueHandsfree.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],

                    [
                        'pname' => '',
                        'price' => 100,
                        'qty' => 20,
                        'i_path' => 'accessories/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],

                    [
                        'pname' => 'Bullet Buds',
                        'price' => 1400,
                        'qty' => 20,
                        'i_path' => 'accessories/bulletBuds.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],

                    [
                        'pname' => 'Desktop Mic',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => 'accessories/desktopMic.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],

                    [
                        'pname' => '360 Headphone',
                        'price' => 4000,
                        'qty' => 20,
                        'i_path' => 'accessories/foldableHead.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],

                    [
                        'pname' => 'Laser Buds',
                        'price' => 3299,
                        'qty' => 20,
                        'i_path' => 'accessories/laserBuds.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],

                   

                    [
                        'pname' => 'L Shaped Stand',
                        'price' => 2200,
                        'qty' => 20,
                        'i_path' => 'accessories/lStand.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],

                    [
                        'pname' => 'Camera with Mic',
                        'price' => 4400,
                        'qty' => 20,
                        'i_path' => 'accessories/micCam.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => 'Laser Air Buds',
                        'price' => 100,
                        'qty' => 20,
                        'i_path' => 'accessories/laserBuds1.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],

                    [
                        'pname' => 'Movo Black Mic',
                        'price' => 3300,
                        'qty' => 20,
                        'i_path' => 'accessories/movoBlack.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],

                    

                    [
                        'pname' => '',
                        'price' => 100,
                        'qty' => 20,
                        'i_path' => 'accessories/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],

                    [
                        'pname' => 'Movo Mini Black',
                        'price' => 100,
                        'qty' => 20,
                        'i_path' => 'accessories/movoMini.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],

                    [
                        'pname' => '3 in 1 Headphone',
                        'price' => 100,
                        'qty' => 20,
                        'i_path' => 'accessories/threeMic.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],

                    [
                        'pname' => 'Single Mic',
                        'price' => 100,
                        'qty' => 20,
                        'i_path' => 'accessories/singleMic.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],

                    [
                        'pname' => '',
                        'price' => 100,
                        'qty' => 20,
                        'i_path' => 'accessories/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],

                    [
                        'pname' => 'L Shaped White Stand',
                        'price' => 100,
                        'qty' => 20,
                        'i_path' => 'accessories/whileLstand.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],

                    [
                        'pname' => '',
                        'price' => 100,
                        'qty' => 20,
                        'i_path' => 'accessories/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => 'Wireless Headphones',
                        'price' => 100,
                        'qty' => 20,
                        'i_path' => 'accessories/wirelessHead.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],

                    [
                        'pname' => 'White Air Pods',
                        'price' => 100,
                        'qty' => 20,
                        'i_path' => 'accessories/whiteAir.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],

                ],
            ],

            [
                'cname' => 'Beauty',
                'dept'  => '1', // Example department
                'products' => [
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/beauty/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/beauty/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/beauty/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/beauty/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/beauty/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/beauty/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/beauty/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/beauty/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/beauty/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/beauty/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/beauty/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/beauty/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/beauty/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/beauty/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/beauty/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/beauty/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/beauty/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/beauty/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/beauty/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/beauty/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/beauty/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                ],
            ],

            [
                'cname' => 'Derma',
                'dept'  => '1', // Example department
                'products' => [
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/derma/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/derma/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/derma/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/derma/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/derma/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/derma/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/derma/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/derma/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/derma/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/derma/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/derma/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/derma/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/derma/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/derma/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/derma/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/derma/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/derma/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/derma/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/derma/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/derma/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                ],
            ],

            [
                'cname' => 'Hosiery',
                'dept'  => '1', // Example department
                'products' => [
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/hos/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],

                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/hos/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/hos/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/hos/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/hos/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/hos/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/hos/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/hos/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/hos/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/hos/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                ],
            ],

            [
                'cname' => 'Jewellery',
                'dept'  => '1', // Example department
                'products' => [
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/jewel/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/jewel/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/jewel/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/jewel/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/jewel/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/jewel/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/jewel/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/jewel/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/jewel/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/jewel/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/jewel/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/jewel/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/jewel/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/jewel/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/jewel/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/jewel/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/jewel/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/jewel/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                ],
            ],

            [
                'cname' => 'Pants',
                'dept'  => '1', // Example department
                'products' => [
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/pants/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],

                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/pants/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/pants/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/pants/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/pants/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/pants/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/pants/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/pants/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/pants/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],

                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/pants/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/pants/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/pants/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/pants/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/pants/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/pants/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/pants/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                ],
            ],

            [
                'cname' => 'Ladies Shirts',
                'dept'  => '1', // Example department
                'products' => [
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/ladiesShirts/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/ladiesShirts/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/ladiesShirts/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/ladiesShirts/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/ladiesShirts/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/ladiesShirts/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/ladiesShirts/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/ladiesShirts/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                ],
            ],

            [
                'cname' => 'LadiesTop',
                'dept'  => '1', // Example department
                'products' => [
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/ladiesTop/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/ladiesTop/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/ladiesTop/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/ladiesTop/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/ladiesTop/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/ladiesTop/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/ladiesTop/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/ladiesTop/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/ladiesTop/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/ladiesTop/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/ladiesTop/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ]
                ],
            ],

            [
                'cname' => 'Undergarments',
                'dept'  => '1', // Example department
                'products' => [
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/undergarments/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/undergarments/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/undergarments/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/undergarments/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/undergarments/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/undergarments/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/undergarments/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/undergarments/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/undergarments/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/undergarments/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/undergarments/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/undergarments/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/undergarments/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/undergarments/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/undergarments/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/undergarments/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/undergarments/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/undergarments/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/undergarments/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/undergarments/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/undergarments/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/undergarments/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/undergarments/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/undergarments/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/undergarments/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ]
                ],
            ],

            [
                'cname' => 'Leather',
                'dept'  => '1', // Example department
                'products' => [
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/leather/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/leather/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/leather/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/leather/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/leather/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/leather/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/leather/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/leather/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ]
                ],
            ],

            [
                'cname' => 'Eastern',
                'dept'  => '1', // Example department
                'products' => [
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/eastern/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/eastern/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/eastern/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/eastern/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/eastern/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/eastern/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/eastern/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/eastern/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/eastern/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/eastern/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/eastern/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/eastern/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/eastern/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/eastern/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/eastern/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ]
                ],
            ],

            [
                'cname' => 'Toys',
                'dept'  => '1', // Example department
                'products' => [
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/toys/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/toys/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/toys/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/toys/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/toys/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/toys/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/toys/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/toys/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/toys/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/toys/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/toys/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/toys/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/toys/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/toys/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/toys/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ]
                    
                ],
            ],

            [
                'cname' => 'Uniform',
                'dept'  => '1', // Example department
                'products' => [
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/uniform/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/uniform/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/uniform/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/uniform/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/uniform/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/uniform/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/uniform/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/uniform/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/uniform/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '/uniform/.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                ],
            ],

            [
                'cname' => 'Stationary',
                'dept'  => '1', // Example department
                'products' => [
                    [
                        'pname' => '',
                        'price' => ,
                        'qty' => 20,
                        'i_path' => '.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['']
                    ],
                ],
            ],
            
        ];

        foreach ($categoriesWithProducts as $categoryData) {
            // Create category with department
            $category = Category::factory()->create([
                'cname' => $categoryData['cname'],
                'dept'  => $categoryData['dept'], // Now using the dept field
            ]);

            // Create each product for the current category
            foreach ($categoryData['products'] as $productDetails) {
                $product = Product::factory()->create([ // Assign the created product to $product
                    'category_id' => $category->id,
                    'pname' => $productDetails['pname'],
                    'price' => $productDetails['price'],
                    'qty' => $productDetails['qty'],
                    'i_path' => $productDetails['i_path'],
                    'description_id' => $productDetails['description_id'],
                    'featured' => $productDetails['featured'],
                ]);

                foreach ($productDetails['images'] as $imageName) {
                    \App\Models\Pimage::create([
                        'product_id' => $product->id,
                        'name' => $imageName,
                    ]);
                }
            }
        }

      
    }
}
