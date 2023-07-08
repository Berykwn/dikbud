<?php

namespace App\Http\Controllers;

use App\Http\Resources\KritikSaranCollection;
use App\Models\Budaya;
use App\Models\Event;
use App\Models\Berita;
use App\Models\Kritik;
use App\Models\Pegawai;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $feedbackCollection = new KritikSaranCollection(Kritik::latest()->take(6)->get());
        
        $latestData = [
            'Berita' => Berita::latest('updated_at')->first(['updated_at']),
            'Event' => Event::latest('updated_at')->first(['updated_at']),
            'Budaya' => Budaya::latest('updated_at')->first(['updated_at']),
            'Kritik' => Kritik::latest('updated_at')->first(['updated_at']),
            'Pegawai' => Pegawai::latest('updated_at')->first(['updated_at']),
        ];

        $countData = [
            'Berita' => Berita::count(),
            'Event' => Event::count(),
            'Budaya' => Budaya::count(),
            'Pegawai' => Pegawai::count(),
            'Kritik' => Kritik::count(),
        ];

        // Check if Kritik data is empty or doesn't exist in the database
        $latestData['Kritik']['updated_at'] = $latestData['Kritik']['updated_at'] ?? null;

        return Inertia::render('Dashboard', [
            'pages' => 'Dashboard',
            'title' => 'Dashboard',
            'feedback' => $feedbackCollection,
            'latestData' => $latestData,
            'countData' => $countData,
        ]);
    }
}
