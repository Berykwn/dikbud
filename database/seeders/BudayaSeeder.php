<?php

namespace Database\Seeders;

use App\Models\Budaya;
use Illuminate\Database\Seeder;

class BudayaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Budaya::factory()->count(10)->create();
    }
}
