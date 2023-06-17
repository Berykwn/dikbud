<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Budaya>
 */
class BudayaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            "kategori_budaya_id" => $this->faker->randomElement([1,2,3]),
            "thumbnail" => 'default.png',
            "nama" => $this->faker->sentence(6),
            "deskripsi" => $this->faker->sentence(6),
            "konten" => $this->faker->paragraph(6),
            "sumber" => $this->faker->url(),
        ];
    }
}
