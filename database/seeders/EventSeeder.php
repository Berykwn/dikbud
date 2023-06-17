<?php

namespace Database\Seeders;

use Database\Factories\EventFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Event;
use Illuminate\Database\Seeder;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Event::truncate();

        Event::create([
            'judul_event' => 'Pameran Seni Rupa',
            'deskripsi' => 'Pameran seni rupa yang menampilkan karya seni dari berbagai pelukis terkenal',
            'tempat' => 'Galeri Seni Jakarta',
            'tanggal_mulai' => '2023-04-15 10:00:00',
            'tanggal_selesai' => '2023-04-17 18:00:00',
            'thumbnail' => 'default.png',
            'kategori' => 'seni',
        ]);

        Event::create([
            'judul_event' => 'Festival Kebudayaan Jawa',
            'deskripsi' => 'Festival kebudayaan Jawa yang menampilkan berbagai kesenian dan kegiatan budaya Jawa',
            'tempat' => 'Taman Budaya Yogyakarta',
            'tanggal_mulai' => '2023-06-10 09:00:00',
            'tanggal_selesai' => '2023-06-12 22:00:00',
            'thumbnail' => 'default.png',
            'kategori' => 'kebudayaan',
        ]);

        Event::factory()->count(10)->create();
    }
}
