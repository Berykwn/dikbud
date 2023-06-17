<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Budaya extends Model
{
    use HasFactory;

    protected $fillable =
    [
        'nama',
        'kategori_budaya_id',
        'thumbnail',
        'deskripsi',
        'konten',
        'sumber',
    ];
    public function kategori_budaya()
    {
        return $this->belongsTo(KategoriBudaya::class);
    }
}
