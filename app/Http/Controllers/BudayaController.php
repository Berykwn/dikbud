<?php

namespace App\Http\Controllers;

use App\Http\Resources\BudayaCollection;
use App\Models\Budaya;
use App\Models\KategoriBudaya;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BudayaController extends Controller
{
    private function fetchBudayaData()
    {
        $this->budaya = Budaya::with('kategori_budaya')->orderByDesc('updated_at')->paginate(8);
        $this->allBudaya = Budaya::with('kategori_budaya')->latest()->get();
    }

    public function getBudaya()
    {
        $this->fetchBudayaData();

        return Inertia::render('Budaya', [
            'pages' => 'Budaya',
            'title' => 'Budaya',
            'budaya' => new BudayaCollection($this->budaya),
            'allBudaya' => new BudayaCollection($this->allBudaya)
        ]);
    }

    public function index()
    {
        $this->fetchBudayaData();

        return Inertia::render('Adminpage/Budaya/Budaya', [
            'title' => 'Dashboard Budaya',
            'page' => 'Dashboard Budaya',
            'budaya' => new BudayaCollection($this->budaya),
            'allBudaya' => new BudayaCollection($this->allBudaya)
        ]);
    }

    public function create()
    {
        return Inertia::render('Adminpage/Budaya/CreateBudaya', [
            'pages' => 'Dashboard Budaya',
            'title' => 'Tambah Budaya',
            'kategoriBudaya' => KategoriBudaya::all()
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            "nama" => "required",
            "kategori_budaya_id" => "required",
            'deskripsi' => 'required',
            'konten' => 'required',
            'thumbnail' => 'required|file|mimes:jpeg,png,jpg|max:2048',
            'sumber' => 'required',
        ], [
                'nama.required' => 'The Nama field is required.',
                'kategori_budaya_id.required' => 'The Kategori field is required.',
                'deskripsi.required' => 'The Deskripsi field is required.',
                'konten.required' => 'The Konten field is required.',
                'thumbnail.required' => 'The Thumbnail field is required.',
                'thumbnail.file' => 'The Thumbnail must be a file.',
                'thumbnail.mimes' => 'The Thumbnail must be in JPEG, PNG, or JPG format.',
                'thumbnail.max' => 'The Thumbnail size must not exceed 2MB.',
                'sumber.required' => 'The Sumber field is required.',
            ]);

        if ($request->hasFile('thumbnail')) {
            $thumbnail = $request->file('thumbnail');
            $thumbnailName = time() . '_' . $thumbnail->getClientOriginalName();

            $thumbnail->storeAs('img/budayas', $thumbnailName); // menyimpan gambar ke direktori

            $budaya = new Budaya();
            $budaya->nama = $request->input('nama');
            $budaya->kategori_budaya_id = $request->input('kategori_budaya_id');
            $budaya->thumbnail = $thumbnailName; // Update the image URL
            $budaya->konten = $request->input('konten');
            $budaya->deskripsi = $request->input('deskripsi');
            $budaya->sumber = $request->input('sumber');
            $budaya->save();

            return redirect()->route('dashboard.budaya')->with('message', 'Budaya data successfully added.');
        } else {
            return redirect()->back()
                ->withErrors(['thumbnail' => 'The image file was not found or is invalid. Make sure to select a valid image file in JPEG or PNG format, with a maximum size of 2MB.'])
                ->withInput();
        }
    }

    public function show(Budaya $budaya, Request $request)
    {
        return Inertia::render('Adminpage/Budaya/DetailBudaya', [
            'budayaDetail' => Budaya::with('kategori_budaya')->findOrFail($request->id),
            'pages' => 'Budaya',
            'title' => 'Detail Budaya',
        ]);
    } 

    public function edit(Budaya $budaya, Request $request)
    {
        return Inertia::render('Adminpage/Budaya/EditBudaya', [
            'budaya' => Budaya::with('kategori_budaya')->findOrFail($request->id),
            'kategoriBudaya' => KategoriBudaya::all(),
            'pages' => 'Dashboard Budaya',
            'title' => 'Edit Budaya',
        ]);
    }

    public function update(Request $request, Budaya $budaya, $id)
    {
        $budaya = Budaya::findOrFail($id);

        $previousThumbnail = $budaya->thumbnail;

        $validatedData = $request->validate([
            'nama' => 'required',
            'kategori_budaya_id' => 'required|integer',
            'deskripsi' => 'required',
            'konten' => 'required',
            'thumbnail' => 'nullable|max:2048',
            'sumber' => 'required',
        ]);


        $budaya->update($validatedData);

        if ($request->hasFile('thumbnail')) {
            $thumbnail = $request->file('thumbnail');

            // Delete the previous thumbnail file if it exists
            if ($previousThumbnail && Storage::exists('img/budayas/' . $previousThumbnail)) {
                Storage::delete('img/budayas/' . $previousThumbnail);
            }

            $thumbnailName = time() . '_' . $thumbnail->getClientOriginalName();
            $thumbnail->storeAs('img/budayas', $thumbnailName);

            $budaya->thumbnail = $thumbnailName;
            $budaya->save();
        }

        return redirect()->route('dashboard.budaya')->with('message', 'Data budaya berhasil diperbarui');
    }

    public function destroy(Budaya $budaya, Request $request)
    {
        $budaya = Budaya::find($request->id);
        //cek apakah di storage ada thumbnail
        if (Storage::exists('img/beritas/' . $budaya->thumbnail)) {
            Storage::delete('img/budayas/' . $budaya->thumbnail);
        }

        $budaya->delete();

        return redirect()->route('dashboard.budaya')->with('message', 'Data budaya berhasil dihapus!');
    }
}