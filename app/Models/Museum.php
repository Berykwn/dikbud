<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Museum extends Model
{
    use HasFactory;

    public function gambar()
    {
        return $this->hasMany(GambarMuseum::class);
    }

    public function gambarMuseums()
    {
        return $this->hasMany(GambarMuseum::class);
    }
}
