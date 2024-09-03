<?php

namespace Database\Factories;

use App\Models\Pimage;
use Illuminate\Database\Eloquent\Factories\Factory;

class PimageFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Pimage::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $catNames = ['2001.jpg','2002.jpg','2004.jpg','2000.jpg'];

        return [
            'product_id' => $this->faker->numberBetween($min = 1, $max = 15),
            'name' => $this->faker->randomElement($array = $catNames),
        ];
    }
}
