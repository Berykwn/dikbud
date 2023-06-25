<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class event extends Model
{
    use HasFactory;

    protected $fillable = [
        'judul_event',
        'deskripsi',
        'tempat',
        'tanggal_mulai',
        'tanggal_selesai',
        'thumbnail',
        'kategori',
    ];
}
