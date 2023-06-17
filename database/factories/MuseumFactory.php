<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Museum>
 */
class MuseumFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'nama' => $this->faker->name,
            'thumbnail' => 'https://dummyimage.com/600x400/000/fff',
            'deskripsi' => $this->faker->paragraph,
            'kategori' => $this->faker->word,
            'tanggal_ditemukan' => $this->faker->date(),
            'kondisi' => $this->faker->randomElement(['Baik', 'Rusak']),
            'ukuran' => $this->faker->numberBetween(1, 100),
        ];
    }
}
