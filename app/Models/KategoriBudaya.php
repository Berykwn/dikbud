<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KategoriBudaya extends Model
{
    use HasFactory;

    public function budaya() {
        return $this->hasMany(Budaya::class);
    }
}
