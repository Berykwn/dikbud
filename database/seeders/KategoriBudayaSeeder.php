<?php

namespace Database\Seeders;

use App\Models\KategoriBudaya;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KategoriBudayaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        KategoriBudaya::create([
            "nama" => "Cagar Budaya",
            "deskripsi" => "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
        ]);
        KategoriBudaya::create([
            "nama" => "Sejarah dan Tradisi",
            "deskripsi" => "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
        ]);
        KategoriBudaya::create([
            "nama" => "Kesenian",
            "deskripsi" => "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
        ]);

    }
}