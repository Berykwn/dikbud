<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\CarouselCollection;
use App\Http\Resources\EventCollection;
use App\Http\Resources\BeritaCollection;
use App\Http\Resources\MuseumCollection;
use App\Models\Carousel;
use App\Models\Event;
use App\Models\Berita;
use App\Models\Museum;
use App\Models\Kritik;
use App\Models\KategoriBudaya;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $carousel = new CarouselCollection(Carousel::latest()->take(4)->get());
        $event = new EventCollection(Event::latest()->take(4)->get());
        $berita = new BeritaCollection(Berita::orderByDesc('updated_at')->take(3)->get());
        $kategoriKebudayaan = KategoriBudaya::all();
        $museum = new MuseumCollection(Museum::latest()->take(8)->get());
        return Inertia::render('Home', [
            'pages' => 'Home',
            'title' => 'Home',
            'carousel' => $carousel,
            'event' => $event,
            'berita' => $berita,
            'museum' => $museum,
            'kategoriKebudayaan' => $kategoriKebudayaan
        ]);
    }

    public function kritikSaran(Request $request)
    {
        $validateData = $request->validate([
            'nama' => 'required',
            'kontak' => 'required',
            'pesan' => 'required',
        ]);

        $kritiksaran = new Kritik();
        $kritiksaran->nama = $validateData['nama'];
        $kritiksaran->kontak = $validateData['kontak'];
        $kritiksaran->pesan = $validateData['pesan'];
        $kritiksaran->save();

        return redirect()->back()->with('message', 'Pesan berhasil dikirim');
    }
}
