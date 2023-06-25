<?php

namespace App\Http\Controllers;

use App\Http\Resources\BeritaCollection;
use App\Http\Resources\GalleryBeritaCollection;
use App\Models\Berita;
use App\Models\GambarBerita;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class GalleryBeritaController extends Controller
{
    private function fetchGalleryBeritaData()
    {
        $this->galleryBerita = GambarBerita::with('berita')->orderByDesc('updated_at')->paginate(8);
        $this->allGalleryBerita = GambarBerita::with('berita')->latest()->get();
        $this->beritas = Berita::latest()->get();
    }

    public function index()
    {
        $this->fetchGalleryBeritaData();

        return Inertia::render('Adminpage/Berita/Gallery/GalleryBerita', [
            'pages' => 'Berita',
            'title' => 'Gallery Berita',
            'galleryBerita' => new GalleryBeritaCollection($this->galleryBerita),
            'allGalleryBerita' => new GalleryBeritaCollection($this->allGalleryBerita),
        ]);
    }

    public function create()
    {
        $this->fetchGalleryBeritaData();

        return Inertia::render('Adminpage/Berita/Gallery/CreateGalleryBerita', [
            'pages' => 'Berita',
            'title' => 'Gallery Berita',
            'berita' => new BeritaCollection($this->beritas)
        ]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'berita_id' => 'required',
            'gambar' => 'required|file|mimes:jpeg,png,jpg|max:2048',
        ], [
            'required' => 'The :attribute field is required.',
            'gambar.required' => 'The thumbnail field is required.',
            'gambar.file' => 'The thumbnail must be a file.',
            'gambar.mimes' => 'The thumbnail must be a JPEG, PNG, or JPG file.',
            'gambar.max' => 'The thumbnail may not be greater than 2048 kilobytes.',
        ]);

        try {
            $gambar = $validatedData['gambar'];
            $gambarName = time() . '_' . Str::slug($gambar->getClientOriginalName());

            if (!$gambar->storeAs('img/gallery/beritas', $gambarName)) {
                return redirect()->back()->with('error', 'Terjadi kesalahan saat mengupload gambar.');
            }

            $galleryBeritaData = [
                'berita_id' => $validatedData['berita_id'],
                'gambar' => $gambarName,
            ];

            GambarBerita::create($galleryBeritaData);

            return redirect()->route('dashboard.galleryberita')->with('message', 'The image has been successfully added.');
        } catch (Exception $e) {
            return redirect()->back()->with('error', 'Terjadi kesalahan saat mengupload gambar.');
        }
    }


    public function destroy(GambarBerita $gambarBerita, Request $request)
    {
        $gambarBerita = GambarBerita::find($request->id);
        //cek apakah di storage ada thumbnail
        if (Storage::exists('img/gallery/beritas' . $gambarBerita->thumbnail)) {
            Storage::delete('img/gallery/beritas' . $gambarBerita->thumbnail);
        }

        $gambarBerita->delete();

        return redirect()->route('dashboard.galleryberita')->with('message', 'Data berita berhasil dihapus!');
    }
}