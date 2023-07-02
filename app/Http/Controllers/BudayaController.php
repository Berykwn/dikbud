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

    public function detailBudayaPage(Budaya $budaya, Request $request)
    {
        $budayaDetail = $budaya->find($request->id);
        $gambarBudayas = $budayaDetail->gambarBudayas()->where('budaya_id', $request->id)->get();

        return Inertia::render('DetailBudaya', [
            'pages' => 'Budaya',
            'title' => 'Detail Budaya',
            'budayaDetail' => $budayaDetail,
            'budaya' => new BudayaCollection(Budaya::with('kategori_budaya')->latest()->take(4)->get()),
            'gambarBudaya' => $gambarBudayas
        ]);
    }

    public function index()
    {
        $this->fetchBudayaData();

        return Inertia::render('Adminpage/Budaya/Budaya', [
            'title' => 'Budaya',
            'page' => 'Museum Budaya',
            'budaya' => new BudayaCollection($this->budaya),
            'allBudaya' => new BudayaCollection($this->allBudaya)
        ]);
    } 

    public function create()
    {
        return Inertia::render('Adminpage/Budaya/CreateBudaya', [
            'pages' => 'Museum Budaya',
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
            'thumbnail.required' => 'The Thumbnail field is required.',
            'thumbnail.file' => 'The Thumbnail must be a file.',
            'thumbnail.mimes' => 'The Thumbnail must be in JPEG, PNG, or JPG format.',
            'thumbnail.max' => 'The Thumbnail size must not exceed 2MB.',
        ]);

        try {
            $thumbnailFile = $request->file('thumbnail');
            $thumbnailName = time() . '_' . $thumbnailFile->getClientOriginalName();
            $thumbnailFile->storeAs('img/budayas', $thumbnailName);

            $budayaData = [
                'nama' => $request->input('nama'),
                'kategori_budaya_id' => $request->input('kategori_budaya_id'),
                'thumbnail' => $thumbnailName,
                'konten' => $request->input('konten'),
                'deskripsi' => $request->input('deskripsi'),
                'sumber' => $request->input('sumber'),
            ];

            Budaya::create($budayaData);

            return redirect()->route('dashboard.budaya')->with('message', 'Data budaya berhasil ditambahkan.');
        } catch (Exception $e) {
            return redirect()->back()->with('error', 'Thumbnail gagal diunggah.');
        }
    }


    public function show(Budaya $budaya, Request $request)
    {
        return Inertia::render('Adminpage/Budaya/DetailBudaya', [
            'pages' => 'Budaya',
            'title' => 'Detail Budaya',
            'budayaDetail' => Budaya::with('kategori_budaya')->findOrFail($request->id),
        ]);
    }

    public function edit(Budaya $budaya, Request $request)
    {
        return Inertia::render('Adminpage/Budaya/EditBudaya', [
            'budaya' => Budaya::with('kategori_budaya')->findOrFail($request->id),
            'kategoriBudaya' => KategoriBudaya::all(),
            'pages' => 'Budaya',
            'title' => 'Edit Budaya',
        ]);
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'nama' => 'required',
            'kategori_budaya_id' => 'required|integer',
            'deskripsi' => 'required',
            'konten' => 'required',
            'thumbnail' => 'nullable|max:2048',
            'sumber' => 'required',
        ], [
            'kategori_budaya_id.integer' => 'The Kategori Budaya ID must be an integer.',
            'thumbnail.max' => 'The Thumbnail size must not exceed 2MB.',
        ]);

        try {
            $budaya = Budaya::findOrFail($id);
            $previousThumbnail = $budaya->thumbnail;

            $budaya->update($validatedData);

            if ($request->hasFile('thumbnail')) {
                $this->handleThumbnailUpload($budaya, $request->file('thumbnail'), $previousThumbnail);
            }

            return redirect()->route('dashboard.budaya')->with('message', 'Data budaya berhasil diperbarui.');
            
        } catch (Exception $e) {
            return redirect()->back()->with('error', 'Terjadi kesalahan saat memperbarui data budaya.');
        }
    }

    private function handleThumbnailUpload(Budaya $budaya, $thumbnail, $previousThumbnail)
    {
        // Hapus thumbnail sebelumnya jika ada
        if ($previousThumbnail && Storage::exists('img/budayas/' . $previousThumbnail)) {
            Storage::delete('img/budayas/' . $previousThumbnail);
        }

        $thumbnailName = time() . '_' . $thumbnail->getClientOriginalName();
        $thumbnail->storeAs('img/budayas', $thumbnailName);

        $budaya->thumbnail = $thumbnailName;
        $budaya->save();
    }

    public function destroy(Budaya $budaya, Request $request)
    {
        $budaya = Budaya::find($request->id);
        //cek apakah di storage ada thumbnail
        if (Storage::exists('img/budayas/' . $budaya->thumbnail)) {
            Storage::delete('img/budayas/' . $budaya->thumbnail);
        }

        $budaya->delete();

        return redirect()->route('dashboard.budaya')->with('message', 'Data budaya berhasil dihapus!');
    }

}