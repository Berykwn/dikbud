<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'judul_event' => $this->faker->sentence(3),
            'deskripsi' => $this->faker->paragraph(5),
            'tempat' => $this->faker->address,
            'tanggal_mulai' => $this->faker->dateTimeBetween('now', '+1 month'),
            'tanggal_selesai' => $this->faker->dateTimeBetween('+1 month', '+2 months'),
            'thumbnail' => 'default.png',
            'kategori' => $this->faker->randomElement(['seni', 'musik', 'teater', 'film', 'kebudayaan']),
        ];
    }
}
