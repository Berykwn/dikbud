<?php

namespace App\Http\Controllers;

use App\Http\Resources\BudayaCollection;
use App\Models\Budaya;
use App\Models\GambarBudaya;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Resources\GambarBudayaCollection;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;


class GambarBudayaController extends Controller
{
    private function fetchgambarBudayaData()
    {
        $this->gambarBudaya = GambarBudaya::with('budaya')->orderByDesc('updated_at')->paginate(8);
        $this->allGambarBudaya = GambarBudaya::with('budaya')->latest()->get();
        $this->budayas = Budaya::latest()->get();
    }

    public function index()
    {
        $this->fetchgambarBudayaData();

        return Inertia::render('Adminpage/Budaya/Gallery/GalleryBudaya', [
            'pages' => 'Museum Budaya',
            'title' => 'Gallery Budaya',
            'galleryBudaya' => new GambarBudayaCollection($this->gambarBudaya),
            'allGalleryBudaya' => new GambarBudayaCollection($this->allGambarBudaya),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $this->fetchgambarBudayaData();

        return Inertia::render('Adminpage/Budaya/Gallery/CreateGalleryBudaya', [
            'pages' => 'Museum Budaya',
            'title' => 'Gallery Budaya',
            'budaya' => new BudayaCollection($this->budayas)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'budaya_id' => 'required',
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

            if (!$gambar->storeAs('img/gallery/budayas', $gambarName)) {
                return redirect()->back()->with('error', 'Terjadi kesalahan saat mengupload gambar.');
            }

            $gambarBudayaData = [
                'budaya_id' => $validatedData['budaya_id'],
                'gambar' => $gambarName,
            ];

            GambarBudaya::create($gambarBudayaData);

            return redirect()->route('dashboard.gallery.budaya')->with('message', 'The image has been successfully added.');
        } catch (Exception $e) {
            return redirect()->back()->with('error', 'Terjadi kesalahan saat mengupload gambar.');
        }
    }


    public function destroy(GambarBudaya $gambarBudaya, Request $request)
    {
        $gambarBudaya = GambarBudaya::find($request->id);
        //cek apakah di storage ada thumbnail
        if (Storage::exists('img/gallery/budayas' . $gambarBudaya->gambar)) {
            Storage::delete('img/gallery/budayas' . $gambarBudaya->gambar);
        }

        $gambarBudaya->delete();

        return redirect()->route('dashboard.gallery.budaya')->with('message', 'Gambar berhasil dihapus!');
    }
}