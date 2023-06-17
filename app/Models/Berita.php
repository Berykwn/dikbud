<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Berita extends Model
{
    use HasFactory;

    protected $fillable =
    [
        'judul',
        'deskripsi',
        'konten',
        'sumber',
        'kategori',
        'penulis',
        'thumbnail',
    ];

    public function gambarBeritas()
    {
        return $this->hasMany(GambarBerita::class);
    }
} 