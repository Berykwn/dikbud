<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\BeritaCollection;
use App\Models\Berita;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class BeritaController extends Controller
{
    private $berita;
    private $allBerita;

    public function getAllBerita()
    {
        $this->berita = Berita::orderByDesc('updated_at')->paginate(8);
        $this->allBerita = Berita::latest()->get();

        return Inertia::render('Berita', [
            'pages' => 'Berita',
            'title' => 'Berita',
            'berita' => new BeritaCollection($this->berita),
            'allBerita' => new BeritaCollection($this->allBerita) 
        ]);
    }

    public function detailBeritaPage(Berita $berita, Request $request)
    {
        $beritaDetail = $berita->find($request->id);
        $beritaCollection = new BeritaCollection(Berita::latest()->take(4)->get());
        $gambarBeritas = $beritaDetail->gambarBeritas()->where('berita_id', $request->id)->get();

        return Inertia::render('DetailBerita', [
            'pages' => 'Detail Berita',
            'title' => 'Detail Berita',
            'beritaDetail' => $beritaDetail,
            'berita' => $beritaCollection,
            'gambarBerita' => $gambarBeritas
        ]);
    }

    public function index()
    {
        $this->berita = Berita::orderByDesc('updated_at')->paginate(8);
        $this->allBerita = Berita::latest()->get();

        return Inertia::render('Adminpage/Berita/Berita', [
            'pages' => 'Berita',
            'title' => 'Dashboard Berita',
            'berita' => new BeritaCollection($this->berita),
            'allBerita' => new beritaCollection($this->allBerita)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Adminpage/Berita/CreateBerita', [
            'pages' => 'Berita',
            'title' => 'Tambah Berita',
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
        $this->validate($request, [
            'judul' => 'required',
            'konten' => 'required',
            'deskripsi' => 'required',
            'thumbnail' => 'required|file|mimes:jpeg,png,jpg|max:2048',
            'kategori' => 'required',
            'penulis' => 'required',
            'sumber' => 'required',
        ], [
                'required' => 'The :attribute field is required.',
                'thumbnail.required' => 'The thumbnail field is required.',
                'thumbnail.file' => 'The thumbnail must be a file.',
                'thumbnail.mimes' => 'The thumbnail must be a JPEG, PNG, or JPG file.',
                'thumbnail.max' => 'The thumbnail may not be greater than 2048 kilobytes.',
            ]);

        $thumbnail = $request->file('thumbnail');

        if (!$thumbnail->isValid()) {
            return redirect()->back()
                ->withErrors(['thumbnail' => 'There was an error uploading the thumbnail. Please try again.'])
                ->withInput();
        }

        $thumbnailName = time() . '_' . Str::slug($thumbnail->getClientOriginalName());

        $thumbnail->storeAs('img/beritas', $thumbnailName);

        $berita = new Berita();
        $berita->judul = $request->input('judul');
        $berita->konten = $request->input('konten');
        $berita->deskripsi = $request->input('deskripsi');
        $berita->thumbnail = $thumbnailName;
        $berita->kategori = $request->input('kategori');
        $berita->penulis = $request->input('penulis');
        $berita->sumber = $request->input('sumber');
        $berita->save();

        return redirect()->route('dashboard.berita')->with('message', 'News data has been successfully added.');
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Berita  $berita
     * @return \Illuminate\Http\Response
     */
    public function show(Berita $berita, Request $request)
    {
        $beritaDetail = $berita->find($request->id);

        return Inertia::render('Adminpage/Berita/DetailBerita', [
            'beritaDetail' => $beritaDetail,
            'pages' => 'Berita',
            'title' => 'Detail Berita',
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Berita  $berita
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, Berita $berita)
    {
        $beritas = $berita->find($request->id);

        return Inertia::render('Adminpage/Berita/EditBerita', [
            'berita' => $beritas,
            'pages' => 'Berita',
            'title' => 'Edit Berita',
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Berita  $berita
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $berita = Berita::findOrFail($id);

        $previousThumbnail = $berita->thumbnail;

        $validatedData = $request->validate([
            'judul' => 'required',
            'konten' => 'required',
            'deskripsi' => 'required',
            'thumbnail' => 'nullable|max:2048',
            'kategori' => 'required',
            'penulis' => 'required',
            'sumber' => 'required',
        ]);

        $berita->update($validatedData);

        if ($request->hasFile('thumbnail')) {
            $thumbnail = $request->file('thumbnail');

            // Delete the previous thumbnail file if it exists
            if ($previousThumbnail && Storage::exists('img/beritas/' . $previousThumbnail)) {
                Storage::delete('img/beritas/' . $previousThumbnail);
            }

            $thumbnailName = time() . '_' . $thumbnail->getClientOriginalName();
            $thumbnail->storeAs('img/beritas', $thumbnailName);

            $berita->thumbnail = $thumbnailName;
            $berita->save();
        }

        return redirect()->route('dashboard.berita')->with('message', 'Data berita berhasil diperbarui');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Berita  $berita
     * @return \Illuminate\Http\Response 
     */
    public function destroy(Berita $berita, Request $request)
    {
        $berita = Berita::find($request->id);
        //cek apakah di storage ada thumbnail
        if (Storage::exists('img/beritas/' . $berita->thumbnail)) {
            Storage::delete('img/beritas/' . $berita->thumbnail);
        }

        $berita->delete();

        return redirect()->route('dashboard.berita')->with('message', 'Data berita berhasil dihapus!');
    }
}