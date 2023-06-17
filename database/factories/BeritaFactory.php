<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Berita>
 */
class BeritaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'judul' => $this->faker->sentence(6),
            'deskripsi' => $this->faker->paragraph(6),
            'konten' => $this->faker->paragraph(10),
            'thumbnail' => 'default.png',
            'kategori' => $this->faker->randomElement(['seni', 'musik', 'teater', 'film', 'kebudayaan']),
            'penulis' => $this->faker->name(),
            'sumber' => $this->faker->userAgent(),
        ];
    }
}
