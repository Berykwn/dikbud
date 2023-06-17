<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class CarouselSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        DB::table('carousels')->insert([
                'name' => 'carousel-1',
                'img' => 'img/carouselku-1.png',
            ]);
        DB::table('carousels')->insert([
                'name' => 'carousel-2',
                'img' => 'img/carouselku-2.png',
            ]);
        DB::table('carousels')->insert([
                'name' => 'carousel-3',
                'img' => 'img/carouselku-1.png',
            ]);
    }
}