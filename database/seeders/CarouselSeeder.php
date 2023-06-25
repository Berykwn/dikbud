<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Carousel;


class CarouselSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
       Carousel::create([
        'name' => 'banner-1',
        'img' => 'img/banner1.png'
       ]);

       Carousel::create([
        'name' => 'banner-2',
        'img' => 'img/banner2.png'
       ]);

       Carousel::create([
        'name' => 'banner-3',
        'img' => 'img/banner3.png'
       ]);
    }
}