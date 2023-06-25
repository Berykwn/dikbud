<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GambarBudaya extends Model
{
    use HasFactory;

    protected $fillable = [
        'budaya_id',
        'gambar'
    ];
    public function budaya()
    {
        return $this->belongsTo(Budaya::class);
    }
}
