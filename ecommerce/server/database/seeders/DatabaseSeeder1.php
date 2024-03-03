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
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],

                    [
                        'pname' => 'AV Cable',
                        'price' => 300,
                        'qty' => 20,
                        'i_path' => 'accessories/avCable.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],

                    [
                        'pname' => 'Flexible Handsfree',
                        'price' => 500,
                        'qty' => 20,
                        'i_path' => 'accessories/blueHandsfree.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],


                    [
                        'pname' => 'Bullet Buds',
                        'price' => 1400,
                        'qty' => 20,
                        'i_path' => 'accessories/bulletBuds.jpg',
                        'featured' => 'true',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],

                    [
                        'pname' => 'Desktop Mic',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => 'accessories/desktopMic.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],

                    [
                        'pname' => '360 Headphone',
                        'price' => 4000,
                        'qty' => 20,
                        'i_path' => 'accessories/foldableHead.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],

                    [
                        'pname' => 'Laser Buds',
                        'price' => 3299,
                        'qty' => 20,
                        'i_path' => 'accessories/laserBuds.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],

                   

                    [
                        'pname' => 'L Shaped Stand',
                        'price' => 2200,
                        'qty' => 20,
                        'i_path' => 'accessories/lStand.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],

                    [
                        'pname' => 'Camera with Mic',
                        'price' => 4400,
                        'qty' => 20,
                        'i_path' => 'accessories/micCam.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],
                    [
                        'pname' => 'Laser Air Buds',
                        'price' => 100,
                        'qty' => 20,
                        'i_path' => 'accessories/laserBuds1.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],

                    [
                        'pname' => 'Movo Black Mic',
                        'price' => 3300,
                        'qty' => 20,
                        'i_path' => 'accessories/movoBlack.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],


                    [
                        'pname' => '3 in 1 Headphone',
                        'price' => 100,
                        'qty' => 20,
                        'i_path' => 'accessories/threeMic.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],

                    [
                        'pname' => 'Single Mic',
                        'price' => 100,
                        'qty' => 20,
                        'i_path' => 'accessories/singleMic.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],

                    [
                        'pname' => 'L Shaped White Stand',
                        'price' => 100,
                        'qty' => 20,
                        'i_path' => 'accessories/whileLstand.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],

                    
                    [
                        'pname' => 'Wireless Headphones',
                        'price' => 100,
                        'qty' => 20,
                        'i_path' => 'accessories/wirelessHead.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],

                    [
                        'pname' => 'White Air Pods',
                        'price' => 100,
                        'qty' => 20,
                        'i_path' => 'accessories/whiteAir.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ],
                    [
                        'pname' => 'Movo Mini Black',
                        'price' => 100,
                        'qty' => 20,
                        'i_path' => 'accessories/movoMini.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['avCable.jpg', 'blueHandsfree.jpg','airTorch.jpg']
                    ]

                ],
            ],

            [
                'cname' => 'Beauty',
                'dept'  => '1', // Example department
                'products' => [
                    [
                        'pname' => 'Almond Oil',
                        'price' => 400,
                        'qty' => 20,
                        'i_path' => '/beauty/almondOil.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Onion Hair Oil',
                        'price' => 450,
                        'qty' => 20,
                        'i_path' => '/beauty/beauty.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Disaar Hair Care',
                        'price' => 600,
                        'qty' => 20,
                        'i_path' => '/beauty/beauty2.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Biotin Cream',
                        'price' => 350,
                        'qty' => 20,
                        'i_path' => '/beauty/biotin.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Coconut Brush',
                        'price' => 200 ,
                        'qty' => 20,
                        'i_path' => '/beauty/brush.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Mystic Oil',
                        'price' => 400,
                        'qty' => 20,
                        'i_path' => '/beauty/mysticOil.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Dr Rashel',
                        'price' => 500,
                        'qty' => 20,
                        'i_path' => '/beauty/drRashel.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Brazilian Wax',
                        'price' => 1200,
                        'qty' => 20,
                        'i_path' => '/beauty/wax.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Foot Cream',
                        'price' => 550,
                        'qty' => 20,
                        'i_path' => '/beauty/footCream.jpg',
                        'featured' => 'true',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Coconut Oil',
                        'price' => 750,
                        'qty' => 20,
                        'i_path' => '/beauty/coconutOil.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Gloss',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/beauty/gloss.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Pink Muscara',
                        'price' => 150,
                        'qty' => 20,
                        'i_path' => '/beauty/muskara.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Hair Removal',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/beauty/hairRemoval.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Shine Mask',
                        'price' => 400,
                        'qty' => 20,
                        'i_path' => '/beauty/mask.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Komal Oil',
                        'price' => 150,
                        'qty' => 20,
                        'i_path' => '/beauty/komalOil.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Moisturizing Cream',
                        'price' => 250 ,
                        'qty' => 20,
                        'i_path' => '/beauty/moisturer.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Mehndi',
                        'price' => 150,
                        'qty' => 20,
                        'i_path' => '/beauty/mehndi.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Mughziat',
                        'price' => 300,
                        'qty' => 20,
                        'i_path' => '/beauty/mughziat.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'Muscara',
                        'price' => 180,
                        'qty' => 20,
                        'i_path' => '/beauty/muscara2.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                    [
                        'pname' => 'She Crazy',
                        'price' => 800,
                        'qty' => 20,
                        'i_path' => '/beauty/sheCrazy.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['beauty.jpg', 'almondOil.jpg','brush.jpg','drRashel.jpg', 'footCream.jpg','sheCrazy.jpg']
                    ],
                ],
            ],

            [
                'cname' => 'Derma',
                'dept'  => '1', // Example department
                'products' => [
                    [
                        'pname' => 'Cleansing Milk ',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/derma/1.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','5','7','8','1','3']
                    ],
                    [
                        'pname' => 'Aloe Vera Gel',
                        'price' => 500,
                        'qty' => 20,
                        'i_path' => '/derma/2.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','5','7','8','1','3']
                    ],
                    [
                        'pname' => 'Massage Cream',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/derma/3.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','5','7','8','1','3']
                    ],
                    [
                        'pname' => 'Derma Gel',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/derma/4.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','5','7','8','1','3']
                    ],
                    [
                        'pname' => 'Derma Scrub',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/derma/5.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','5','7','8','1','3']
                    ],
                    [
                        'pname' => 'Skin Cleanser',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/derma/6.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','5','7','8','1','3']
                    ],
                    [
                        'pname' => 'Derma Skin Care',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/derma/7.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','5','7','8','1','3']
                    ],
                    [
                        'pname' => 'Black Mask',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/derma/8.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','5','7','8','1','3']
                    ],
                    [
                        'pname' => 'Facial Wash Scrub',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/derma/9.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','5','7','8','1','3']
                    ],
                    [
                        'pname' => 'Cracked Heal Cream',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/derma/10.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','5','7','8','1','3']
                    ],
                    [
                        'pname' => 'Skin Bleach Cream',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/derma/11.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','5','7','8','1','3']
                    ],
                    [
                        'pname' => 'Bleach Mask',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/derma/12.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','5','7','8','1','3']
                    ],
                    [
                        'pname' => 'Brightening Facial Mask',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/derma/13.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','5','7','8','1','3']
                    ],
                    [
                        'pname' => 'Wash & Scrub Mask',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/derma/14.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','5','7','8','1','3']
                    ],
                    [
                        'pname' => 'Foaming Facial Wash',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/derma/15.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','5','7','8','1','3']
                    ],
                    [
                        'pname' => 'Brightening Deep Cleanser',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/derma/16.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','5','7','8','1','3']
                    ],
                    [
                        'pname' => 'Pedi Scrub',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/derma/17.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','5','7','8','1','3']
                    ],
                    [
                        'pname' => 'Active Bright Face Wash',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/derma/18.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','5','7','8','1','3']
                    ],
                    [
                        'pname' => 'Sun Block Cream',
                        'price' => 200,
                        'qty' => 20,
                        'i_path' => '/derma/19.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','5','7','8','1','3']
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
                        'i_path' => '/hos/1.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],

                    [
                        'pname' => 'Fleece Pullover',
                        'price' => 2600,
                        'qty' => 20,
                        'i_path' => '/hos/2.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Casual Jeans',
                        'price' => 1600,
                        'qty' => 20,
                        'i_path' => '/hos/3.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Ladies Long Coat',
                        'price' => 5000,
                        'qty' => 20,
                        'i_path' => '/hos/4.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Fleece Zipper',
                        'price' => 3400,
                        'qty' => 20,
                        'i_path' => '/hos/6.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Ladies Frill Shirt',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/hos/7.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Long Fleece Pullover',
                        'price' => 2600,
                        'qty' => 20,
                        'i_path' => '/hos/8.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Fur Zipper',
                        'price' => 6200,
                        'qty' => 20,
                        'i_path' => '/hos/9.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Self Design Coat',
                        'price' => 5200,
                        'qty' => 20,
                        'i_path' => '/hos/10.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ]
                ],
            ],

            [
                'cname' => 'Jewellery',
                'dept'  => '1', // Example department
                'products' => [
                    [
                        'pname' => 'Diamond Ring',
                        'price' => 25000,
                        'qty' => 20,
                        'i_path' => '/jewel/1.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Earings',
                        'price' => 10000,
                        'qty' => 20,
                        'i_path' => '/jewel/2.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Braclet',
                        'price' => 12000,
                        'qty' => 20,
                        'i_path' => '/jewel/3.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Platinum Locket',
                        'price' => 14000,
                        'qty' => 20,
                        'i_path' => '/jewel/4.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Rajhastani Necklace',
                        'price' => 18000,
                        'qty' => 20,
                        'i_path' => '/jewel/5.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Pearls Braclets',
                        'price' => 25000,
                        'qty' => 20,
                        'i_path' => '/jewel/6.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Platinum Ring',
                        'price' => 7,
                        'qty' => 20,
                        'i_path' => '/jewel/7.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Stone Braclets',
                        'price' => 15000,
                        'qty' => 20,
                        'i_path' => '/jewel/9.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Baby Tops',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/jewel/12.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Pearls Bi Set',
                        'price' => 4500,
                        'qty' => 20,
                        'i_path' => '/jewel/11.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Indian Necklace',
                        'price' => 18500,
                        'qty' => 20,
                        'i_path' => '/jewel/14.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Heavy Necklace',
                        'price' => 21000,
                        'qty' => 20,
                        'i_path' => '/jewel/13.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Necklace Earing Set',
                        'price' => 22500,
                        'qty' => 20,
                        'i_path' => '/jewel/15.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Gold Ring',
                        'price' => 8000,
                        'qty' => 20,
                        'i_path' => '/jewel/16.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Pearl Ring',
                        'price' => 4500,
                        'qty' => 20,
                        'i_path' => '/jewel/17.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Stone Ring',
                        'price' => 3200,
                        'qty' => 20,
                        'i_path' => '/jewel/18.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
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
                        'i_path' => '/pants/1.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],

                    [
                        'pname' => 'Pant Style 2',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/pants/2.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Pant Style 3',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/pants/3.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Pant Style 4',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/pants/4.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Pant Style 5',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/pants/5.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Pant Style 6',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/pants/6.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Pant Style 7',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/pants/7.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Pant Style 8',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/pants/8.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Pant Style 9',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/pants/9.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],

                    [
                        'pname' => 'Pant Style 10',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/pants/10.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Pant Style 11',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/pants/12.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Pant Style 13',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/pants/13.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Pant Style 14',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/pants/14.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Pant Style 15',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/pants/15.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
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
                        'i_path' => '/ladiesShirts/1.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Shirt Style 2',
                        'price' => 2600,
                        'qty' => 20,
                        'i_path' => '/ladiesShirts/2.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Shirt Style 3',
                        'price' => 2600,
                        'qty' => 20,
                        'i_path' => '/ladiesShirts/3.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Shirt Style 4',
                        'price' => 2600,
                        'qty' => 20,
                        'i_path' => '/ladiesShirts/4.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Shirt Style 5',
                        'price' => 2600,
                        'qty' => 20,
                        'i_path' => '/ladiesShirts/5.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Shirt Style 6',
                        'price' => 2600,
                        'qty' => 20,
                        'i_path' => '/ladiesShirts/6.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Shirt Style 7',
                        'price' => 2600,
                        'qty' => 20,
                        'i_path' => '/ladiesShirts/7.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Shirt Style 8',
                        'price' => 2600,
                        'qty' => 20,
                        'i_path' => '/ladiesShirts/8.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                ],
            ],

            [
                'cname' => 'LadiesTop',
                'dept'  => '1', // Example department
                'products' => [
                    [
                        'pname' => 'Ladies Western Shirt',
                        'price' => 2200,
                        'qty' => 20,
                        'i_path' => '/hos/1.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],

                    [
                        'pname' => 'Fleece Pullover',
                        'price' => 2600,
                        'qty' => 20,
                        'i_path' => '/hos/2.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Casual Jeans',
                        'price' => 1600,
                        'qty' => 20,
                        'i_path' => '/hos/3.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Ladies Long Coat',
                        'price' => 5000,
                        'qty' => 20,
                        'i_path' => '/hos/4.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Fleece Zipper',
                        'price' => 3400,
                        'qty' => 20,
                        'i_path' => '/hos/6.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Ladies Frill Shirt',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/hos/7.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Long Fleece Pullover',
                        'price' => 2600,
                        'qty' => 20,
                        'i_path' => '/hos/8.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Fur Zipper',
                        'price' => 6200,
                        'qty' => 20,
                        'i_path' => '/hos/9.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ],
                    [
                        'pname' => 'Self Design Coat',
                        'price' => 5200,
                        'qty' => 20,
                        'i_path' => '/hos/10.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['2','4','7','8','1','3']
                    ]
                ],
            ],

            [
                'cname' => 'Undergarments',
                'dept'  => '1', // Example department
                'products' => [
                    [
                        'pname' => 'Undergarments Item 1',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/undergarments/1.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['underFeatured1.jpg','underFeatured2.jpg','underFeatured3.jpg','underFeatured4.jpg','underFeatured5.jpg','underFeatured6.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 2',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/undergarments/2.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['underFeatured1.jpg','underFeatured2.jpg','underFeatured3.jpg','underFeatured4.jpg','underFeatured5.jpg','underFeatured6.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 3',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/undergarments/3.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['underFeatured1.jpg','underFeatured2.jpg','underFeatured3.jpg','underFeatured4.jpg','underFeatured5.jpg','underFeatured6.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 4',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/undergarments/4.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['underFeatured1.jpg','underFeatured2.jpg','underFeatured3.jpg','underFeatured4.jpg','underFeatured5.jpg','underFeatured6.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 5',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/undergarments/5.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['underFeatured1.jpg','underFeatured2.jpg','underFeatured3.jpg','underFeatured4.jpg','underFeatured5.jpg','underFeatured6.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 6',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/undergarments/6.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['underFeatured1.jpg','underFeatured2.jpg','underFeatured3.jpg','underFeatured4.jpg','underFeatured5.jpg','underFeatured6.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 7',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/undergarments/7.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['underFeatured1.jpg','underFeatured2.jpg','underFeatured3.jpg','underFeatured4.jpg','underFeatured5.jpg','underFeatured6.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 8',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/undergarments/8.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['underFeatured1.jpg','underFeatured2.jpg','underFeatured3.jpg','underFeatured4.jpg','underFeatured5.jpg','underFeatured6.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 9',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/undergarments/9.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['underFeatured1.jpg','underFeatured2.jpg','underFeatured3.jpg','underFeatured4.jpg','underFeatured5.jpg','underFeatured6.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 9',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/undergarments/9.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['underFeatured1.jpg','underFeatured2.jpg','underFeatured3.jpg','underFeatured4.jpg','underFeatured5.jpg','underFeatured6.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 10',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/undergarments/10.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['underFeatured1.jpg','underFeatured2.jpg','underFeatured3.jpg','underFeatured4.jpg','underFeatured5.jpg','underFeatured6.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 11',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/undergarments/11.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['underFeatured1.jpg','underFeatured2.jpg','underFeatured3.jpg','underFeatured4.jpg','underFeatured5.jpg','underFeatured6.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 12',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/undergarments/12.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['underFeatured1.jpg','underFeatured2.jpg','underFeatured3.jpg','underFeatured4.jpg','underFeatured5.jpg','underFeatured6.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 13',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/undergarments/13.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['underFeatured1.jpg','underFeatured2.jpg','underFeatured3.jpg','underFeatured4.jpg','underFeatured5.jpg','underFeatured6.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 14',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/undergarments/14.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['underFeatured1.jpg','underFeatured2.jpg','underFeatured3.jpg','underFeatured4.jpg','underFeatured5.jpg','underFeatured6.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 15',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/undergarments/15.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['underFeatured1.jpg','underFeatured2.jpg','underFeatured3.jpg','underFeatured4.jpg','underFeatured5.jpg','underFeatured6.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 16',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/undergarments/16.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['underFeatured1.jpg','underFeatured2.jpg','underFeatured3.jpg','underFeatured4.jpg','underFeatured5.jpg','underFeatured6.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 17',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/undergarments/17.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['underFeatured1.jpg','underFeatured2.jpg','underFeatured3.jpg','underFeatured4.jpg','underFeatured5.jpg','underFeatured6.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 18',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/undergarments/18.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['underFeatured1.jpg','underFeatured2.jpg','underFeatured3.jpg','underFeatured4.jpg','underFeatured5.jpg','underFeatured6.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 19',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/undergarments/19.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['underFeatured1.jpg','underFeatured2.jpg','underFeatured3.jpg','underFeatured4.jpg','underFeatured5.jpg','underFeatured6.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 20',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/undergarments/20.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['underFeatured1.jpg','underFeatured2.jpg','underFeatured3.jpg','underFeatured4.jpg','underFeatured5.jpg','underFeatured6.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 21',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/undergarments/21.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['underFeatured1.jpg','underFeatured2.jpg','underFeatured3.jpg','underFeatured4.jpg','underFeatured5.jpg','underFeatured6.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 22',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/undergarments/22.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['underFeatured1.jpg','underFeatured2.jpg','underFeatured3.jpg','underFeatured4.jpg','underFeatured5.jpg','underFeatured6.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 23',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/undergarments/23.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['underFeatured1.jpg','underFeatured2.jpg','underFeatured3.jpg','underFeatured4.jpg','underFeatured5.jpg','underFeatured6.jpg']
                    ],

                    [
                        'pname' => 'Undergarments Item 24',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/undergarments/24.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['underFeatured1.jpg','underFeatured2.jpg','underFeatured3.jpg','underFeatured4.jpg','underFeatured5.jpg','underFeatured6.jpg']
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
                        'i_path' => '/leather/1.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['leatherFeatured1.jpg','leatherFeatured2.jpg','leatherFeatured3.jpg','leatherFeatured4.jpg','leatherFeatured5.jpg','leatherFeatured6.jpg']
                    ],
                    [
                        'pname' => 'Leather Item 2',
                        'price' => 5000,
                        'qty' => 20,
                        'i_path' => '/leather/2.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['leatherFeatured1.jpg','leatherFeatured2.jpg','leatherFeatured3.jpg','leatherFeatured4.jpg','leatherFeatured5.jpg','leatherFeatured6.jpg']
                    ],
                    [
                        'pname' => 'Leather Item 3',
                        'price' => 5000,
                        'qty' => 20,
                        'i_path' => '/leather/3.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['leatherFeatured1.jpg','leatherFeatured2.jpg','leatherFeatured3.jpg','leatherFeatured4.jpg','leatherFeatured5.jpg','leatherFeatured6.jpg']
                    ],
                    [
                        'pname' => 'Leather Item 4',
                        'price' => 5000,
                        'qty' => 20,
                        'i_path' => '/leather/4.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['leatherFeatured1.jpg','leatherFeatured2.jpg','leatherFeatured3.jpg','leatherFeatured4.jpg','leatherFeatured5.jpg','leatherFeatured6.jpg']
                    ],
                    [
                        'pname' => 'Leather Item 5',
                        'price' => 5000,
                        'qty' => 20,
                        'i_path' => '/leather/5.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['leatherFeatured1.jpg','leatherFeatured2.jpg','leatherFeatured3.jpg','leatherFeatured4.jpg','leatherFeatured5.jpg','leatherFeatured6.jpg']
                    ],
                    [
                        'pname' => 'Leather Item 6',
                        'price' => 5000,
                        'qty' => 20,
                        'i_path' => '/leather/6.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['leatherFeatured1.jpg','leatherFeatured2.jpg','leatherFeatured3.jpg','leatherFeatured4.jpg','leatherFeatured5.jpg','leatherFeatured6.jpg']
                    ],
                    [
                        'pname' => 'Leather Item 7',
                        'price' => 5000,
                        'qty' => 20,
                        'i_path' => '/leather/7.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['leatherFeatured1.jpg','leatherFeatured2.jpg','leatherFeatured3.jpg','leatherFeatured4.jpg','leatherFeatured5.jpg','leatherFeatured6.jpg']
                    ],
                    [
                        'pname' => 'Leather Item 8',
                        'price' => 5000,
                        'qty' => 20,
                        'i_path' => '/leather/8.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['leatherFeatured1.jpg','leatherFeatured2.jpg','leatherFeatured3.jpg','leatherFeatured4.jpg','leatherFeatured5.jpg','leatherFeatured6.jpg']
                    ]
                ],
            ],

            [
                'cname' => 'Eastern',
                'dept'  => '1', // Example department
                'products' => [
                    [
                        'pname' => '3 Piece Embroidered',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/eastern/1000.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ],
                    [
                        'pname' => '2 Piece Embroidered',
                        'price' => 2600,
                        'qty' => 20,
                        'i_path' => '/eastern/1001.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ],
                    [
                        'pname' => 'Lawn Duppatta',
                        'price' => 2800,
                        'qty' => 20,
                        'i_path' => '/eastern/1002.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ],
                    [
                        'pname' => 'Eid Collection',
                        'price' => 3200,
                        'qty' => 20,
                        'i_path' => '/eastern/1003.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ],
                    [
                        'pname' => 'Patch Work',
                        'price' => 2400,
                        'qty' => 20,
                        'i_path' => '/eastern/1004.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ],
                    [
                        'pname' => 'Maria B Summer Collection',
                        'price' => 2300,
                        'qty' => 20,
                        'i_path' => '/eastern/1005.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ],
                    [
                        'pname' => 'Winter Collection',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/eastern/1006.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ],
                    [
                        'pname' => 'Chicken Embroidered',
                        'price' => 3300,
                        'qty' => 20,
                        'i_path' => '/eastern/1007.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ],
                    [
                        'pname' => 'Khaddar Collection',
                        'price' => 3400,
                        'qty' => 20,
                        'i_path' => '/eastern/1008.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ],
                    [
                        'pname' => 'Net Embroidered',
                        'price' => 3450,
                        'qty' => 20,
                        'i_path' => '/eastern/1009.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ],
                    [
                        'pname' => 'Contrast Collection',
                        'price' => 3600,
                        'qty' => 20,
                        'i_path' => '/eastern/1010.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ],
                    [
                        'pname' => 'Shiffon Duppatta',
                        'price' => 3399,
                        'qty' => 20,
                        'i_path' => '/eastern/1011.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ],
                    [
                        'pname' => 'Sapphire Lawn Collection',
                        'price' => 4500,
                        'qty' => 20,
                        'i_path' => '/eastern/1012.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ],
                    [
                        'pname' => 'Sana Safina Lawn',
                        'price' => 5200,
                        'qty' => 20,
                        'i_path' => '/eastern/1013.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ],
                    [
                        'pname' => 'Fraz Manan',
                        'price' => 6300,
                        'qty' => 20,
                        'i_path' => '/eastern/1014.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ],
                    [
                        'pname' => 'Khaddi Summer Collection',
                        'price' => 6300,
                        'qty' => 20,
                        'i_path' => '/eastern/1016.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['1001.jpg','1002.jpg','1012.jpg','1004.jpg','1009.jpg','1008.jpg']
                    ]
                ],
            ],

            [
                'cname' => 'Toys',
                'dept'  => '1', // Example department
                'products' => [
                    [
                        'pname' => 'Angel Girl',
                        'price' => 1500,
                        'qty' => 20,
                        'i_path' => '/toys/angelGirl.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['crain.jpg','duckWater1.jpg','helicopter.jpg','kitchen3.jpg','puzzle.jpg','tabletTen.jpg']
                    ],
                    [
                        'pname' => 'Remote Control Car',
                        'price' => 2000,
                        'qty' => 20,
                        'i_path' => '/toys/car1.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['crain.jpg','duckWater1.jpg','helicopter.jpg','kitchen3.jpg','puzzle.jpg','tabletTen.jpg']
                    ],
                    [
                        'pname' => 'Rescue Crain',
                        'price' => 2400,
                        'qty' => 20,
                        'i_path' => '/toys/crain.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['crain.jpg','duckWater1.jpg','helicopter.jpg','kitchen3.jpg','puzzle.jpg','tabletTen.jpg']
                    ],
                    [
                        'pname' => 'Duck Water',
                        'price' => 1400,
                        'qty' => 20,
                        'i_path' => '/toys/duckWater1.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['crain.jpg','duckWater1.jpg','helicopter.jpg','kitchen3.jpg','puzzle.jpg','tabletTen.jpg']
                    ],
                    [
                        'pname' => 'Baby Guitar',
                        'price' => 1000,
                        'qty' => 20,
                        'i_path' => '/toys/guitar.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['crain.jpg','duckWater1.jpg','helicopter.jpg','kitchen3.jpg','puzzle.jpg','tabletTen.jpg']
                    ],
                    [
                        'pname' => 'Helicopter',
                        'price' => 2000,
                        'qty' => 20,
                        'i_path' => '/toys/helicopter.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['crain.jpg','duckWater1.jpg','helicopter.jpg','kitchen3.jpg','puzzle.jpg','tabletTen.jpg']
                    ],
                    [
                        'pname' => 'Jungle King',
                        'price' => 1500,
                        'qty' => 20,
                        'i_path' => '/toys/jungleZoo1.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['crain.jpg','duckWater1.jpg','helicopter.jpg','kitchen3.jpg','puzzle.jpg','tabletTen.jpg']
                    ],
                    [
                        'pname' => 'Kitchen Set',
                        'price' => 1600,
                        'qty' => 20,
                        'i_path' => '/toys/kitchen3.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['crain.jpg','duckWater1.jpg','helicopter.jpg','kitchen3.jpg','puzzle.jpg','tabletTen.jpg']
                    ],
                    [
                        'pname' => 'Zoo Puzzle',
                        'price' => 500,
                        'qty' => 20,
                        'i_path' => '/toys/puzzle.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['crain.jpg','duckWater1.jpg','helicopter.jpg','kitchen3.jpg','puzzle.jpg','tabletTen.jpg']
                    ],
                    [
                        'pname' => 'Rainbow Circle',
                        'price' => 500,
                        'qty' => 20,
                        'i_path' => '/toys/rainbowCircle.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['crain.jpg','duckWater1.jpg','helicopter.jpg','kitchen3.jpg','puzzle.jpg','tabletTen.jpg']
                    ],
                    [
                        'pname' => '10 Inch Tablet',
                        'price' => 1300,
                        'qty' => 20,
                        'i_path' => '/toys/tabletTen.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['crain.jpg','duckWater1.jpg','helicopter.jpg','kitchen3.jpg','puzzle.jpg','tabletTen.jpg']
                    ],
                    [
                        'pname' => 'Teether Rattle',
                        'price' => 100,
                        'qty' => 20,
                        'i_path' => '/toys/teetherRattle.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['crain.jpg','duckWater1.jpg','helicopter.jpg','kitchen3.jpg','puzzle.jpg','tabletTen.jpg']
                    ],
                    [
                        'pname' => 'Train',
                        'price' => 2500,
                        'qty' => 20,
                        'i_path' => '/toys/train4.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['crain.jpg','duckWater1.jpg','helicopter.jpg','kitchen3.jpg','puzzle.jpg','tabletTen.jpg']
                    ],
                    [
                        'pname' => 'Wooden ABC',
                        'price' => 900,
                        'qty' => 20,
                        'i_path' => '/toys/woodenabc.jpg',
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
                        'i_path' => '/uniform/1.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['uniform1.jpg','uniform2.jpg','uniform3.jpg','uniform4.jpg','uniform5.jpg','uniform6.jpg']
                    ],
                    [
                        'pname' => 'Uniform 2',
                        'price' => 2150,
                        'qty' => 20,
                        'i_path' => '/uniform/2.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['uniform1.jpg','uniform2.jpg','uniform3.jpg','uniform4.jpg','uniform5.jpg','uniform6.jpg']
                    ],
                    [
                        'pname' => 'Uniform 3',
                        'price' => 2170,
                        'qty' => 20,
                        'i_path' => '/uniform/3.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['uniform1.jpg','uniform2.jpg','uniform3.jpg','uniform4.jpg','uniform5.jpg','uniform6.jpg']
                    ],
                    [
                        'pname' => 'Uniform 4',
                        'price' => 2200,
                        'qty' => 20,
                        'i_path' => '/uniform/4.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['uniform1.jpg','uniform2.jpg','uniform3.jpg','uniform4.jpg','uniform5.jpg','uniform6.jpg']
                    ],
                    [
                        'pname' => 'Uniform 5',
                        'price' => 2650,
                        'qty' => 20,
                        'i_path' => '/uniform/5.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['uniform1.jpg','uniform2.jpg','uniform3.jpg','uniform4.jpg','uniform5.jpg','uniform6.jpg']
                    ],
                    [
                        'pname' => 'Uniform 6',
                        'price' => 2750,
                        'qty' => 20,
                        'i_path' => '/uniform/6.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['uniform1.jpg','uniform2.jpg','uniform3.jpg','uniform4.jpg','uniform5.jpg','uniform6.jpg']
                    ],
                    [
                        'pname' => 'Uniform 7',
                        'price' => 2800,
                        'qty' => 20,
                        'i_path' => '/uniform/7.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['uniform1.jpg','uniform2.jpg','uniform3.jpg','uniform4.jpg','uniform5.jpg','uniform6.jpg']
                    ],
                    [
                        'pname' => 'Uniform 8',
                        'price' => 2999,
                        'qty' => 20,
                        'i_path' => '/uniform/8.jpg',
                        'featured' => 'false',
                        'description_id' => '',
                        'images' => ['uniform1.jpg','uniform2.jpg','uniform3.jpg','uniform4.jpg','uniform5.jpg','uniform6.jpg']
                    ]
                ],
            ]
            
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
