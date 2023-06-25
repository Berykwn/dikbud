<?php

namespace App\Http\Controllers;

use App\Http\Resources\PegawaiCollection;
use Illuminate\Http\Request;
use App\Http\Resources\CarouselCollection;
use App\Http\Resources\EventCollection;
use App\Http\Resources\BeritaCollection;
use App\Models\Carousel;
use App\Models\Event;
use App\Models\Berita;
use App\Models\Kritik;
use App\Models\KategoriBudaya;
use App\Models\Pegawai;


use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $carousel = Carousel::latest()->take(4)->get();
        $event = Event::latest()->take(4)->get();
        $berita = Berita::latest()->take(3)->get();
        $kategoriKebudayaan = KategoriBudaya::all();
        $pegawai = Pegawai::latest()->take(4)->get();

        return Inertia::render('Home', [
            'pages' => 'Home',
            'title' => 'Home',
            'carousel' => new CarouselCollection($carousel),
            'event' => new EventCollection($event),
            'berita' => new BeritaCollection($berita),
            'kategoriKebudayaan' => $kategoriKebudayaan,
            'pegawai' => new PegawaiCollection($pegawai),
        ]);
    }

    public function kritikSaran(Request $request)
    {
        $validatedData = $request->validate([
            'nama' => 'required',
            'kontak' => 'required',
            'pesan' => 'required',
        ]);

        Kritik::create($validatedData);

        return redirect()->back()->with('message', 'Pesan berhasil dikirim');
    }
}