<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        // $priceCat = config('products.price_category');
        $priceCat = ['7500','8500','9000','5500','8000','9200','4500','3500','7000'];
        $starterImg = ['1001.jpg','1002.jpg','1000.jpg','1003.jpg','1005.jpg','1006.jpg','1007.jpg','1008.jpg'
        ,'1009.jpg','1010.jpg','1011.jpg','1012.jpg','1013.jpg','1014.jpg'];
        $fakeNames = ['3 Piece Embroidered','2 Piece Embroidered','Printed Suit','Chicken Embroidered','Sequence Embroidered','Shiffon Duppatta','Lawn Duppatta','Eid Collection','Hit Design','Net Embroidered','Patch Work','Contrast Collection','2 Piece Printed','Mothers Day','Summer Collection',];
        return [
            'pname' => $this->faker->randomElement($array = $fakeNames),
            'i_path' => $this->faker->randomElement($array = $starterImg),
            'price' => $this->faker->randomElement($array = $priceCat),
            'qty' => $this->faker->numberBetween($min = 11, $max = 90),
            'category_id' => $this->faker->numberBetween($min = 1, $max = 5),
            'featured' => 'true'
        ];
    }
}
