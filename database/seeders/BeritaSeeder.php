<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Berita;

class BeritaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Berita::create([
            'judul' => 'Kenali Jenis Tarian Kabupaten Lahat, Lihat Disini',
            'deskripsi' => 'Lahat sangat kaya akan kebudayaan. Salah satunya tarian. Dijaman sekarang, generasi muda masih banyak belum mengetahui jenis jenis tarian Kabupaten Lahat.',
            'konten' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum odio vel aliquam blandit. Cras sodales mi a suscipit sagittis. Sed elementum eros id sapien malesuada, sit amet tristique nulla semper. Maecenas hendrerit vel lorem vitae ultricies. Nunc quis turpis at ex consectetur semper ac eu nunc. Morbi vel sapien quis orci dignissim rutrum vel ac nulla. Nullam luctus dolor quis ligula varius bibendum.',
            'kategori' => 'Kerajinan Tangan',
            'penulis' => 'John Doe',
            'sumber' => 'Koran Kompas',
            'thumbnail' => 'default.png'
        ]);
        Berita::create([
            'judul' => 'Pameran Seni Lukis Indonesia 2023',
            'deskripsi' => 'Pameran Seni Lukis Indonesia akan diadakan di galeri seni Jakarta pada bulan Juli 2023.',
            'konten' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum odio vel aliquam blandit. Cras sodales mi a suscipit sagittis. Sed elementum eros id sapien malesuada, sit amet tristique nulla semper. Maecenas hendrerit vel lorem vitae ultricies. Nunc quis turpis at ex consectetur semper ac eu nunc. Morbi vel sapien quis orci dignissim rutrum vel ac nulla. Nullam luctus dolor quis ligula varius bibendum.',
            'kategori' => 'Seni Rupa',
            'penulis' => 'Jane Doe',
            'sumber' => 'Majalah Tempo',
            'thumbnail' => 'default.png'
        ]);
        Berita::create([
            'judul' => 'Festival Seni Kerajinan Tangan 2023',
            'deskripsi' => 'Festival Seni Kerajinan Tangan akan digelar di kota Surabaya pada bulan April 2023.',
            'konten' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum odio vel aliquam blandit. Cras sodales mi a suscipit sagittis. Sed elementum eros id sapien malesuada, sit amet tristique nulla semper. Maecenas hendrerit vel lorem vitae ultricies. Nunc quis turpis at ex consectetur semper ac eu nunc. Morbi vel sapien quis orci dignissim rutrum vel ac nulla. Nullam luctus dolor quis ligula varius bibendum.',
            'kategori' => 'Kerajinan Tangan',
            'penulis' => 'John Doe',
            'sumber' => 'Koran Kompas',
            'thumbnail' => 'default.png'
        ]);
        Berita::create([
            'judul' => 'Pameran Seni Lukis Indonesia 2023',
            'deskripsi' => 'Pameran Seni Lukis Indonesia akan diadakan di galeri seni Jakarta pada bulan Juli 2023.',
            'konten' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum odio vel aliquam blandit. Cras sodales mi a suscipit sagittis. Sed elementum eros id sapien malesuada, sit amet tristique nulla semper. Maecenas hendrerit vel lorem vitae ultricies. Nunc quis turpis at ex consectetur semper ac eu nunc. Morbi vel sapien quis orci dignissim rutrum vel ac nulla. Nullam luctus dolor quis ligula varius bibendum.',
            'kategori' => 'Seni Rupa',
            'penulis' => 'Jane Doe',
            'sumber' => 'Majalah Tempo',
            'thumbnail' => 'default.png'
        ]);

        // Berita::factory()->count(10)->create();
    }
}
