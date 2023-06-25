<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run(): void
    {   
        $this->call([
            CarouselSeeder::class,
        ]);
        $this->call([
            EventSeeder::class,
        ]);
        $this->call([
            BeritaSeeder::class,
        ]);
        $this->call([
            KategoriBudayaSeeder::class,
        ]);
        $this->call([
            BudayaSeeder::class,
        ]);
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
