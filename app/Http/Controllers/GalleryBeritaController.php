<?php

namespace App\Http\Controllers;

use App\Http\Resources\BeritaCollection;
use App\Http\Resources\GalleryBeritaCollection;
use App\Models\GambarBerita;
use App\Models\Berita;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia; // Add this import statement

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
            'pages' => 'Gallery Berita',
            'title' => 'Gallery Berita',
            'galleryBerita' => new GalleryBeritaCollection($this->galleryBerita),
            'allGalleryBerita' => new GalleryBeritaCollection($this->allGalleryBerita),
        ]);
    }

    public function create()
    {
        $this->fetchGalleryBeritaData();

        return Inertia::render('Adminpage/Berita/Gallery/CreateGalleryBerita', [
            'pages' => 'Gallery Berita',
            'title' => 'Gallery Berita',
            'berita' => new BeritaCollection($this->beritas)
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'berita_id' => 'required',
            'gambar' => 'required|file|mimes:jpeg,png,jpg|max:2048',
        ], [
            'required' => 'The :attribute field is required.',
            'gambar.required' => 'The thumbnail field is required.',
            'gambar.file' => 'The thumbnail must be a file.',
            'gambar.mimes' => 'The thumbnail must be a JPEG, PNG, or JPG file.',
            'gambar.max' => 'The thumbnail may not be greater than 2048 kilobytes.',
        ]);

        $thumbnail = $request->file('gambar');

        if (!$thumbnail->isValid()) {
            return redirect()->back()
                ->withErrors(['gambar' => 'There was an error uploading the thumbnail. Please try again.'])
                ->withInput();
        }

        $thumbnailName = time() . '_' . Str::slug($thumbnail->getClientOriginalName());

        $thumbnail->storeAs('img/gallery/beritas', $thumbnailName);

        $berita = new Berita();
        $berita->berita_id = $request->input('berita_id');
        $berita->thumbnail = $thumbnailName;
        $berita->save();

        return redirect()->route('dashboard.galleryberita')->with('message', 'The image has been successfully added.');
    }

}