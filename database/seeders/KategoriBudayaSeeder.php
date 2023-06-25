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
            "deskripsi" => "Jelajahi cagar budaya Kabupaten Lahat, temukan keindahan sejarah yang tak ternilai!"
        ]);
        KategoriBudaya::create([
            "nama" => "Sejarah dan Tradisi",
            "deskripsi" => "Jelajahi sejarah dan tradisi di Kabupaten Lahat. Temukan keajaiban masa lalu dan hidupkan kembali warisan budaya yang menakjubkan!"
        ]);
        KategoriBudaya::create([
            "nama" => "Kesenian",
            "deskripsi" => "Temukan pesona kesenian Kabupaten Lahat! Lihat dan pelajari kekayaan budaya yang menakjubkan!"
        ]);

    }
}