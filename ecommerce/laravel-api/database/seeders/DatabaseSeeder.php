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
        
        for ($i = 1; $i <= 250; $i++) {
            Storage::disk('local')->put($i.'.txt', 'Product Description for this product');
        }

        
        // Define categories and their products with details
        $categoriesWithProducts = [
            [
                'cname' => 'Accessories',
                'dept'  => '3', // Example department
                'products' => [
                    [
                        'pname' => 'Air Buds With Torch',
                        'price' => 1200,
                        'qty' => 20,
                        'i_path' => 'Accessories/airTorch.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],

                    [
                        'pname' => 'AV Cable',
                        'price' => 300,
                        'qty' => 20,
                        'i_path' => 'Accessories/avCable.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],

                    [
                        'pname' => 'Flexible Handsfree',
                        'price' => 500,
                        'qty' => 20,
                        'i_path' => 'Accessories/blueHandsfree.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],


                    [
                        'pname' => 'Bullet Buds',
                        'price' => 1400,
                        'qty' => 20,
                        'i_path' => 'Accessories/bulletBuds.jpg',
                        'featured' => 'true',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],

                    [
                        'pname' => 'Desktop Mic',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => 'Accessories/desktopMic.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],

                    [
                        'pname' => '360 Headphone',
                        'price' => 4000,
                        'qty' => 20,
                        'i_path' => 'Accessories/foldableHead.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],

                    [
                        'pname' => 'Laser Buds',
                        'price' => 3299,
                        'qty' => 20,
                        'i_path' => 'Accessories/laserBuds.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],

                   

                    [
                        'pname' => 'L Shaped Stand',
                        'price' => 2200,
                        'qty' => 20,
                        'i_path' => 'Accessories/lStand.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],

                    [
                        'pname' => 'Camera with Mic',
                        'price' => 4400,
                        'qty' => 20,
                        'i_path' => 'Accessories/micCam.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],
                    [
                        'pname' => 'Laser Air Buds',
                        'price' => 100,
                        'qty' => 20,
                        'i_path' => 'Accessories/laserBuds1.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],

                    [
                        'pname' => 'Movo Black Mic',
                        'price' => 3300,
                        'qty' => 20,
                        'i_path' => 'Accessories/movoBlack.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],


                    [
                        'pname' => '3 in 1 Headphone',
                        'price' => 100,
                        'qty' => 20,
                        'i_path' => 'Accessories/threeMic.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],

                    [
                        'pname' => 'Single Mic',
                        'price' => 100,
                        'qty' => 20,
                        'i_path' => 'Accessories/singleMic.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],

                    [
                        'pname' => 'L Shaped White Stand',
                        'price' => 100,
                        'qty' => 20,
                        'i_path' => 'Accessories/whileLstand.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],

                    
                    [
                        'pname' => 'Wireless Headphones',
                        'price' => 100,
                        'qty' => 20,
                        'i_path' => 'Accessories/wirelessHead.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],

                    [
                        'pname' => 'White Air Pods',
                        'price' => 100,
                        'qty' => 20,
                        'i_path' => 'Accessories/whiteAir.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],
                    [
                        'pname' => 'Movo Mini Black',
                        'price' => 100,
                        'qty' => 20,
                        'i_path' => 'Accessories/movoMini.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ]

                ],
            ],

            [
                'cname' => 'Beauty',
                'dept'  => '3', // Example department
                'products' => [
                    [
                        'pname' => 'Almond Oil',
                        'price' => 400,
                        'qty' => 20,
                        'i_path' => '/Beauty/almondOil.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Onion Hair Oil',
                        'price' => 450,
                        'qty' => 20,
                        'i_path' => '/Beauty/beauty.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Disaar Hair Care',
                        'price' => 600,
                        'qty' => 20,
                        'i_path' => '/Beauty/beauty2.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Biotin Cream',
                        'price' => 350,
                        'qty' => 20,
                        'i_path' => '/Beauty/biotin.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Coconut Brush',
                        'price' => 200 ,
                        'qty' => 20,
                        'i_path' => '/Beauty/brush.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Mystic Oil',
                        'price' => 400,
                        'qty' => 20,
                        'i_path' => '/Beauty/mysticOil.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Dr Rashel',
                        'price' => 500,
                        'qty' => 20,
                        'i_path' => '/Beauty/drRashel.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Brazilian Wax',
                        'price' => 1200,
                        'qty' => 20,
                        'i_path' => '/Beauty/wax.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Foot Cream',
                        'price' => 550,
                        'qty' => 20,
                        'i_path' => '/Beauty/footCream.jpg',
                        'featured' => 'true',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Coconut Oil',
                        'price' => 750,
                        'qty' => 20,
                        'i_path' => '/Beauty/coconutOil.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Gloss',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/Beauty/gloss.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Pink Muscara',
                        'price' => 150,
                        'qty' => 20,
                        'i_path' => '/Beauty/muskara.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Hair Removal',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/Beauty/hairRemoval.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Shine Mask',
                        'price' => 400,
                        'qty' => 20,
                        'i_path' => '/Beauty/mask.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Komal Oil',
                        'price' => 150,
                        'qty' => 20,
                        'i_path' => '/Beauty/komalOil.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Moisturizing Cream',
                        'price' => 250 ,
                        'qty' => 20,
                        'i_path' => '/Beauty/moisturer.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Mehndi',
                        'price' => 150,
                        'qty' => 20,
                        'i_path' => '/Beauty/mehndi.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Mughziat',
                        'price' => 300,
                        'qty' => 20,
                        'i_path' => '/Beauty/mughziat.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Muscara',
                        'price' => 180,
                        'qty' => 20,
                        'i_path' => '/Beauty/muscara2.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'She Crazy',
                        'price' => 800,
                        'qty' => 20,
                        'i_path' => '/Beauty/sheCrazy.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                ],
            ],

            [
                'cname' => 'Derma',
                'dept'  => '3', // Example department
                'products' => [
                    [
                        'pname' => 'Cleansing Milk ',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/Derma/1.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','5.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Aloe Vera Gel',
                        'price' => 500,
                        'qty' => 20,
                        'i_path' => '/Derma/2.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','5.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Massage Cream',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/Derma/3.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','5.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Derma Gel',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/Derma/4.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','5.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Derma Scrub',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/Derma/5.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','5.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Skin Cleanser',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/Derma/6.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','5.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Derma Skin Care',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/Derma/7.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','5.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Black Mask',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/Derma/8.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','5.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Facial Wash Scrub',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/Derma/9.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','5.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Cracked Heal Cream',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/Derma/10.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','5.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Skin Bleach Cream',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/Derma/11.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','5.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Bleach Mask',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/Derma/12.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','5.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Brightening Facial Mask',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/Derma/13.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','5.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Wash & Scrub Mask',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/Derma/14.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','5.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Foaming Facial Wash',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/Derma/15.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','5.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Brightening Deep Cleanser',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/Derma/16.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','5.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Pedi Scrub',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/Derma/17.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','5.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Active Bright Face Wash',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/Derma/18.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','5.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Sun Block Cream',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/Derma/19.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','5.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                ],
            ],

            [
                'cname' => 'Ladies Shirts',
                'dept'  => '1', // Example department
                'products' => [
                    [
                        'pname' => 'Ladies Western Shirt',
                        'price' => 2200,
                        'qty' => 20,
                        'i_path' => '/Hos/1.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],

                    [
                        'pname' => 'Fleece Pullover',
                        'price' => 2600,
                        'qty' => 20,
                        'i_path' => '/Hos/2.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Casual Jeans',
                        'price' => 1600,
                        'qty' => 20,
                        'i_path' => '/Hos/3.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Ladies Long Coat',
                        'price' => 5000,
                        'qty' => 20,
                        'i_path' => '/Hos/4.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Fleece Zipper',
                        'price' => 3400,
                        'qty' => 20,
                        'i_path' => '/Hos/6.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Ladies Frill Shirt',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/Hos/7.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Long Fleece Pullover',
                        'price' => 2600,
                        'qty' => 20,
                        'i_path' => '/Hos/8.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Fur Zipper',
                        'price' => 6200,
                        'qty' => 20,
                        'i_path' => '/Hos/9.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Self Design Coat',
                        'price' => 5200,
                        'qty' => 20,
                        'i_path' => '/Hos/10.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ]
                ],
            ],

            [
                'cname' => 'Jewellery',
                'dept'  => '3', // Example department
                'products' => [
                    [
                        'pname' => 'Diamond Ring',
                        'price' => 25000,
                        'qty' => 20,
                        'i_path' => '/Jewellery/1.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Earings',
                        'price' => 10000,
                        'qty' => 20,
                        'i_path' => '/Jewellery/2.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Braclet',
                        'price' => 12000,
                        'qty' => 20,
                        'i_path' => '/Jewellery/3.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Platinum Locket',
                        'price' => 14000,
                        'qty' => 20,
                        'i_path' => '/Jewellery/4.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Rajhastani Necklace',
                        'price' => 18000,
                        'qty' => 20,
                        'i_path' => '/Jewellery/5.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Pearls Braclets',
                        'price' => 25000,
                        'qty' => 20,
                        'i_path' => '/Jewellery/6.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Platinum Ring',
                        'price' => 7,
                        'qty' => 20,
                        'i_path' => '/Jewellery/7.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Stone Braclets',
                        'price' => 15000,
                        'qty' => 20,
                        'i_path' => '/Jewellery/9.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Baby Tops',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/Jewellery/12.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Pearls Bi Set',
                        'price' => 4500,
                        'qty' => 20,
                        'i_path' => '/Jewellery/11.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Indian Necklace',
                        'price' => 18500,
                        'qty' => 20,
                        'i_path' => '/Jewellery/14.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Heavy Necklace',
                        'price' => 21000,
                        'qty' => 20,
                        'i_path' => '/Jewellery/13.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Necklace Earing Set',
                        'price' => 22500,
                        'qty' => 20,
                        'i_path' => '/Jewellery/15.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Gold Ring',
                        'price' => 8000,
                        'qty' => 20,
                        'i_path' => '/Jewellery/16.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Pearl Ring',
                        'price' => 4500,
                        'qty' => 20,
                        'i_path' => '/Jewellery/17.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Stone Ring',
                        'price' => 3200,
                        'qty' => 20,
                        'i_path' => '/Jewellery/18.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ]
                ],
            ],

            [
                'cname' => 'Pants',
                'dept'  => '1', // Example department
                'products' => [
                    [
                        'pname' => 'Pant Style 1',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/Pants/1.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],

                    [
                        'pname' => 'Pant Style 2',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/Pants/2.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Pant Style 3',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/Pants/3.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Pant Style 4',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/Pants/4.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Pant Style 5',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/Pants/5.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Pant Style 6',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/Pants/6.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Pant Style 7',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/Pants/7.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Pant Style 8',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/Pants/8.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Pant Style 9',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/Pants/9.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],

                    [
                        'pname' => 'Pant Style 10',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/Pants/10.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Pant Style 11',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/Pants/12.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Pant Style 13',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/Pants/13.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Pant Style 14',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/Pants/14.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Pant Style 15',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/Pants/15.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                   
                ],
            ],

            [
                'cname' => 'Ladies Shirts',
                'dept'  => '1', // Example department
                'products' => [
                    [
                        'pname' => 'Shirt Style 1',
                        'price' => 2600,
                        'qty' => 20,
                        'i_path' => '/Ladies Shirts/1.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Shirt Style 2',
                        'price' => 2600,
                        'qty' => 20,
                        'i_path' => '/Ladies Shirts/2.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Shirt Style 3',
                        'price' => 2600,
                        'qty' => 20,
                        'i_path' => '/Ladies Shirts/3.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Shirt Style 4',
                        'price' => 2600,
                        'qty' => 20,
                        'i_path' => '/Ladies Shirts/4.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Shirt Style 5',
                        'price' => 2600,
                        'qty' => 20,
                        'i_path' => '/Ladies Shirts/5.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Shirt Style 6',
                        'price' => 2600,
                        'qty' => 20,
                        'i_path' => '/Ladies Shirts/6.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Shirt Style 7',
                        'price' => 2600,
                        'qty' => 20,
                        'i_path' => '/Ladies Shirts/7.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Shirt Style 8',
                        'price' => 2600,
                        'qty' => 20,
                        'i_path' => '/Ladies Shirts/8.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                ],
            ],

            [
                'cname' => 'Ladies Top',
                'dept'  => '1', // Example department
                'products' => [
                    [
                        'pname' => 'Ladies Western Shirt',
                        'price' => 2200,
                        'qty' => 20,
                        'i_path' => '/Ladies Top/1.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],

                    [
                        'pname' => 'Fleece Pullover',
                        'price' => 2600,
                        'qty' => 20,
                        'i_path' => '/Ladies Top/2.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    
                    [
                        'pname' => 'Casual Jeans',
                        'price' => 1600,
                        'qty' => 20,
                        'i_path' => '/Ladies Top/3.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Ladies Long Coat',
                        'price' => 5000,
                        'qty' => 20,
                        'i_path' => '/Ladies Top/4.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Ladies Long Coat',
                        'price' => 5900,
                        'qty' => 20,
                        'i_path' => '/Ladies Top/5.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Fleece Zipper',
                        'price' => 3400,
                        'qty' => 20,
                        'i_path' => '/Ladies Top/6.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Ladies Frill Shirt',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/Ladies Top/7.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Long Fleece Pullover',
                        'price' => 2600,
                        'qty' => 20,
                        'i_path' => '/Ladies Top/8.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Fur Zipper',
                        'price' => 6200,
                        'qty' => 20,
                        'i_path' => '/Ladies Top/9.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Self Design Coat',
                        'price' => 5200,
                        'qty' => 20,
                        'i_path' => '/Ladies Top/10.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ]
                ],
            ],

            [
                'cname' => 'Undergarments',
                'dept'  => '3', // Example department
                'products' => [
                    [
                        'pname' => 'Undergarments Item 1',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/Undergarments/1.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 2',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/Undergarments/2.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 3',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/Undergarments/3.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 4',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/Undergarments/4.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 5',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/Undergarments/5.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 6',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/Undergarments/6.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 7',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/Undergarments/7.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 8',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/Undergarments/8.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 9',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/Undergarments/9.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 9',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/Undergarments/9.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 10',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/Undergarments/10.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 11',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/Undergarments/11.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 12',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/Undergarments/12.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 13',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/Undergarments/13.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 14',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/Undergarments/14.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 15',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/Undergarments/15.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 16',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/Undergarments/16.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 17',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/Undergarments/17.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 18',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/Undergarments/18.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 19',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/Undergarments/19.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 20',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/Undergarments/20.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 21',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/Undergarments/21.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 22',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/Undergarments/22.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 23',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/Undergarments/23.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 24',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/Undergarments/24.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ]
                    
                ],
            ],

            [
                'cname' => 'Leather',
                'dept'  => '1', // Example department
                'products' => [
                    [
                        'pname' => 'Leather Item 1',
                        'price' => 5000,
                        'qty' => 20,
                        'i_path' => '/Leather/1.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                        ],
                    [
                        'pname' => 'Leather Item 2',
                        'price' => 5000,
                        'qty' => 20,
                        'i_path' => '/Leather/2.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                        ],
                    [
                        'pname' => 'Leather Item 3',
                        'price' => 5000,
                        'qty' => 20,
                        'i_path' => '/Leather/3.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                         ],
                    [
                        'pname' => 'Leather Item 4',
                        'price' => 5000,
                        'qty' => 20,
                        'i_path' => '/Leather/4.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                        ],
                    [
                        'pname' => 'Leather Item 5',
                        'price' => 5000,
                        'qty' => 20,
                        'i_path' => '/Leather/5.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                         ],
                    [
                        'pname' => 'Leather Item 6',
                        'price' => 5000,
                        'qty' => 20,
                        'i_path' => '/Leather/6.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                        ],
                    [
                        'pname' => 'Leather Item 7',
                        'price' => 5000,
                        'qty' => 20,
                        'i_path' => '/Leather/7.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                        ],
                    [
                        'pname' => 'Leather Item 8',
                        'price' => 5000,
                        'qty' => 20,
                        'i_path' => '/Leather/8.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                        ]
                ],
            ],

            [
                'cname' => 'Brands',
                'dept'  => '5', // Example department
                'products' => [
                    [
                        'pname' => '3 Piece Embroidered',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/Eastern/1000.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ],
                    [
                        'pname' => '2 Piece Embroidered',
                        'price' => 2600,
                        'qty' => 20,
                        'i_path' => '/Eastern/1001.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ],
                    [
                        'pname' => 'Lawn Duppatta',
                        'price' => 2800,
                        'qty' => 20,
                        'i_path' => '/Eastern/1002.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ],
                    [
                        'pname' => 'Eid Collection',
                        'price' => 3200,
                        'qty' => 20,
                        'i_path' => '/Eastern/1003.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ],
                    [
                        'pname' => 'Patch Work',
                        'price' => 2400,
                        'qty' => 20,
                        'i_path' => '/Eastern/1004.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ],
                    [
                        'pname' => 'Maria B Summer Collection',
                        'price' => 2300,
                        'qty' => 20,
                        'i_path' => '/Eastern/1005.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ],
                    [
                        'pname' => 'Winter Collection',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/Eastern/1006.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ],
                    [
                        'pname' => 'Chicken Embroidered',
                        'price' => 3300,
                        'qty' => 20,
                        'i_path' => '/Eastern/1007.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ],
                    [
                        'pname' => 'Khaddar Collection',
                        'price' => 3400,
                        'qty' => 20,
                        'i_path' => '/Eastern/1008.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ],
                    [
                        'pname' => 'Net Embroidered',
                        'price' => 3450,
                        'qty' => 20,
                        'i_path' => '/Eastern/1009.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ],
                    [
                        'pname' => 'Contrast Collection',
                        'price' => 3600,
                        'qty' => 20,
                        'i_path' => '/Eastern/1010.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ],
                    [
                        'pname' => 'Shiffon Duppatta',
                        'price' => 3399,
                        'qty' => 20,
                        'i_path' => '/Eastern/1011.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ],
                    [
                        'pname' => 'Sapphire Lawn Collection',
                        'price' => 4500,
                        'qty' => 20,
                        'i_path' => '/Eastern/1012.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ],
                    [
                        'pname' => 'Sana Safina Lawn',
                        'price' => 5200,
                        'qty' => 20,
                        'i_path' => '/Eastern/1013.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ],
                    [
                        'pname' => 'Fraz Manan',
                        'price' => 6300,
                        'qty' => 20,
                        'i_path' => '/Eastern/1014.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ],
                    [
                        'pname' => 'Khaddi Summer Collection',
                        'price' => 6300,
                        'qty' => 20,
                        'i_path' => '/Eastern/1016.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ]
                ],
            ],

            [
                'cname' => 'Toys',
                'dept'  => '3', // Example department
                'products' => [
                    [
                        'pname' => 'Angel Girl',
                        'price' => 1500,
                        'qty' => 20,
                        'i_path' => '/Toys/angelGirl.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['crain.jpg','duckWater1.jpg','helicopter.jpg','kitchen3.jpg','puzzle.jpg','tabletTen.jpg']
                    ],
                    [
                        'pname' => 'Remote Control Car',
                        'price' => 2000,
                        'qty' => 20,
                        'i_path' => '/Toys/car1.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['crain.jpg','duckWater1.jpg','helicopter.jpg','kitchen3.jpg','puzzle.jpg','tabletTen.jpg']
                    ],
                    [
                        'pname' => 'Rescue Crain',
                        'price' => 2400,
                        'qty' => 20,
                        'i_path' => '/Toys/crain.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['crain.jpg','duckWater1.jpg','helicopter.jpg','kitchen3.jpg','puzzle.jpg','tabletTen.jpg']
                    ],
                    [
                        'pname' => 'Duck Water',
                        'price' => 1400,
                        'qty' => 20,
                        'i_path' => '/Toys/duckWater1.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['crain.jpg','duckWater1.jpg','helicopter.jpg','kitchen3.jpg','puzzle.jpg','tabletTen.jpg']
                    ],
                    [
                        'pname' => 'Baby Guitar',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/Toys/guitar.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['crain.jpg','duckWater1.jpg','helicopter.jpg','kitchen3.jpg','puzzle.jpg','tabletTen.jpg']
                    ],
                    [
                        'pname' => 'Helicopter',
                        'price' => 2000,
                        'qty' => 20,
                        'i_path' => '/Toys/helicopter.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['crain.jpg','duckWater1.jpg','helicopter.jpg','kitchen3.jpg','puzzle.jpg','tabletTen.jpg']
                    ],
                    [
                        'pname' => 'Jungle King',
                        'price' => 1500,
                        'qty' => 20,
                        'i_path' => '/Toys/jungleZoo1.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['crain.jpg','duckWater1.jpg','helicopter.jpg','kitchen3.jpg','puzzle.jpg','tabletTen.jpg']
                    ],
                    [
                        'pname' => 'Kitchen Set',
                        'price' => 1600,
                        'qty' => 20,
                        'i_path' => '/Toys/kitchen3.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['crain.jpg','duckWater1.jpg','helicopter.jpg','kitchen3.jpg','puzzle.jpg','tabletTen.jpg']
                    ],
                    [
                        'pname' => 'Zoo Puzzle',
                        'price' => 500,
                        'qty' => 20,
                        'i_path' => '/Toys/puzzle.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['crain.jpg','duckWater1.jpg','helicopter.jpg','kitchen3.jpg','puzzle.jpg','tabletTen.jpg']
                    ],
                    [
                        'pname' => 'Rainbow Circle',
                        'price' => 500,
                        'qty' => 20,
                        'i_path' => '/Toys/rainbowCircle.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['crain.jpg','duckWater1.jpg','helicopter.jpg','kitchen3.jpg','puzzle.jpg','tabletTen.jpg']
                    ],
                    [
                        'pname' => '10 Inch Tablet',
                        'price' => 1300,
                        'qty' => 20,
                        'i_path' => '/Toys/tabletTen.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['crain.jpg','duckWater1.jpg','helicopter.jpg','kitchen3.jpg','puzzle.jpg','tabletTen.jpg']
                    ],
                    [
                        'pname' => 'Teether Rattle',
                        'price' => 100,
                        'qty' => 20,
                        'i_path' => '/Toys/teetherRattle.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['crain.jpg','duckWater1.jpg','helicopter.jpg','kitchen3.jpg','puzzle.jpg','tabletTen.jpg']
                    ],
                    [
                        'pname' => 'Train',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/Toys/train4.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['crain.jpg','duckWater1.jpg','helicopter.jpg','kitchen3.jpg','puzzle.jpg','tabletTen.jpg']
                    ],
                    [   'pname' => 'Wooden ABC',
                        'price' => 900,
                        'qty' => 20,
                        'i_path' => '/Toys/woodenabc.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['crain.jpg','duckWater1.jpg','helicopter.jpg','kitchen3.jpg','puzzle.jpg','tabletTen.jpg']
                    ]
                    
                ],
            ],

            [
                'cname' => 'Uniform',
                'dept'  => '1', // Example department
                'products' => [
                    [
                        'pname' => 'Uniform 1',
                        'price' => 2100,
                        'qty' => 20,
                        'i_path' => '/Uniform/1.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Uniform 2',
                        'price' => 2150,
                        'qty' => 20,
                        'i_path' => '/Uniform/2.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Uniform 3',
                        'price' => 2170,
                        'qty' => 20,
                        'i_path' => '/Uniform/3.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Uniform 4',
                        'price' => 2200,
                        'qty' => 20,
                        'i_path' => '/Uniform/4.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Uniform 5',
                        'price' => 2650,
                        'qty' => 20,
                        'i_path' => '/Uniform/5.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Uniform 6',
                        'price' => 2750,
                        'qty' => 20,
                        'i_path' => '/Uniform/6.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Uniform 7',
                        'price' => 2800,
                        'qty' => 20,
                        'i_path' => '/Uniform/7.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Uniform 8',
                        'price' => 2999,
                        'qty' => 20,
                        'i_path' => '/Uniform/8.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ]
                ],
            ],

            [
                'cname' => 'Kids',
                'dept'  => '4', // Example department
                'products' => [
                    [
                        'pname' => 'Baby Zipper',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/Kids/babyBed.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['babyBed.jpg','bib.jpg','romper.jpg','carryBag.jpg']
                    ],
                    [
                        'pname' => 'Bib',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/Kids/bib.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['babyBed.jpg','bib.jpg','romper.jpg','carryBag.jpg']
                    ],
                   

                    [
                        'pname' => 'Romper',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/Kids/romper.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['babyBed.jpg','bib.jpg','romper.jpg','carryBag.jpg']
                    ],


                    [
                        'pname' => 'Carry Bag',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/Kids/carryBag.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['babyBed.jpg','bib.jpg','romper.jpg','carryBag.jpg']
                    ],
                ],
            ],
            [
                'cname' => 'Bed Sheet',
                'dept'  => '2', // Example department
                'products' => [
                    [
                        'pname' => 'Bed Sheet 1',
                        'price' => 2100,
                        'qty' => 20,
                        'i_path' => '/Bed Sheet/1.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Bed Sheet 1',
                        'price' => 2100,
                        'qty' => 20,
                        'i_path' => '/Bed Sheet/2.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Bed Sheet 1',
                        'price' => 2100,
                        'qty' => 20,
                        'i_path' => '/Bed Sheet/3.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Bed Sheet 1',
                        'price' => 2100,
                        'qty' => 20,
                        'i_path' => '/Bed Sheet/4.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Bed Sheet 1',
                        'price' => 2100,
                        'qty' => 20,
                        'i_path' => '/Bed Sheet/5.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Bed Sheet 1',
                        'price' => 2100,
                        'qty' => 20,
                        'i_path' => '/Bed Sheet/6.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Bed Sheet 1',
                        'price' => 2100,
                        'qty' => 20,
                        'i_path' => '/Bed Sheet/7.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Bed Sheet 1',
                        'price' => 2100,
                        'qty' => 20,
                        'i_path' => '/Bed Sheet/8.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    
                ],
            ],
            [
                'cname' => 'Cushion',
                'dept'  => '2', // Example department
                'products' => [
                    [
                        'pname' => 'Cushion 1',
                        'price' => 2100,
                        'qty' => 20,
                        'i_path' => '/Cushion/1.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Cushion 1',
                        'price' => 2100,
                        'qty' => 20,
                        'i_path' => '/Cushion/2.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Cushion 1',
                        'price' => 2100,
                        'qty' => 20,
                        'i_path' => '/Cushion/3.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Cushion 1',
                        'price' => 2100,
                        'qty' => 20,
                        'i_path' => '/Cushion/4.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Cushion 1',
                        'price' => 2100,
                        'qty' => 20,
                        'i_path' => '/Cushion/5.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Cushion 1',
                        'price' => 2100,
                        'qty' => 20,
                        'i_path' => '/Cushion/6.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Cushion 1',
                        'price' => 2100,
                        'qty' => 20,
                        'i_path' => '/Cushion/7.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Cushion 1',
                        'price' => 2100,
                        'qty' => 20,
                        'i_path' => '/Cushion/8.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    
                ],
            ],
            [
                'cname' => 'Sana Safina',
                'dept'  => '5', // Example department
                'products' => [
                    [
                        'pname' => 'Sana Safina 1',
                        'price' => 2100,
                        'qty' => 20,
                        'i_path' => '/Sana Safina/1.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Sana Safina 1',
                        'price' => 2100,
                        'qty' => 20,
                        'i_path' => '/Sana Safina/2.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Sana Safina 1',
                        'price' => 2100,
                        'qty' => 20,
                        'i_path' => '/Sana Safina/3.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Sana Safina 1',
                        'price' => 2100,
                        'qty' => 20,
                        'i_path' => '/Sana Safina/4.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Sana Safina 1',
                        'price' => 2100,
                        'qty' => 20,
                        'i_path' => '/Sana Safina/5.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Sana Safina 1',
                        'price' => 2100,
                        'qty' => 20,
                        'i_path' => '/Sana Safina/6.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
                    ],
                    [
                        'pname' => 'Sana Safina 1',
                        'price' => 2100,
                        'qty' => 20,
                        'i_path' => '/Sana Safina/7.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2.jpg','4.jpg','7.jpg','8.jpg','1.jpg','3.jpg']
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
