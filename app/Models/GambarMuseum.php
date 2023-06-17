<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GambarMuseum extends Model
{
    use HasFactory;

    public function museum()
    {
        return $this->belongsTo(Museum::class);
    }
}
