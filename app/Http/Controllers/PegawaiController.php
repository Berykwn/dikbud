<?php

namespace App\Http\Controllers;

use App\Http\Resources\PegawaiCollection;
use App\Models\Pegawai;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class PegawaiController extends Controller
{
    private function fetchPegawaiData()
    {
        $this->pegawai = Pegawai::orderByDesc('updated_at')->paginate(8);
        $this->allPegawai = Pegawai::latest()->get();
    }

    public function pegawaiPage()
    {
        $this->fetchPegawaiData();

        return Inertia::render('Pegawai', [
            'pages' => 'Pegawai',
            'title' => 'Pegawai',
            'pegawai' => new PegawaiCollection($this->pegawai),
            'allPegawai' => new PegawaiCollection($this->allPegawai)
        ]);
    }

    public function index()
    {
        $this->fetchPegawaiData();

        return Inertia::render('Adminpage/Pegawai/Pegawai', [
            'pages' => 'Dashboard Pegawai',
            'title' => 'Dashboard Pegawai',
            'pegawai' => new PegawaiCollection($this->pegawai),
            'allPegawai' => new PegawaiCollection($this->allPegawai)
        ]);
    }

    public function create()
    {
        return Inertia::render('Adminpage/Pegawai/CreatePegawai', [
            'pages' => 'Dashboard Pegawai',
            'title' => 'Dashboard Pegawai',
        ]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            "nama" => "required",
            "jabatan" => "required",
            'pesan' => 'required',
            'foto' => 'nullable|file|mimes:jpeg,png,jpg|max:2048',
        ], [
            'required' => 'The :attribute field is required.',
            'foto.required' => 'The foto field is required.',
            'foto.file' => 'The foto must be a file.',
            'foto.mimes' => 'The foto must be a JPEG, PNG, or JPG file.',
            'foto.max' => 'The foto may not be greater than 2048 kilobytes.',
        ]);

        try {
            $fotoFile = $request->file('foto');
            $fotoName = time() . '_' . Str::slug($fotoFile->getClientOriginalName());
            $fotoFile->storeAs('img/pegawais', $fotoName);

            $pegawaiData = [
                'nama' => $validatedData['nama'],
                'jabatan' => $validatedData['jabatan'],
                'pesan' => $validatedData['pesan'],
                'foto' => $fotoName,
            ];

            Pegawai::create($pegawaiData);

            return redirect()->route('dashboard.pegawai')->with('message', 'Data pegawai berhasil ditambahkan.');
        } catch (Exception $e) {
            return redirect()->back()->with('error', 'Terjadi kesalahan saat mengupload foto.');
        }
    }


    public function edit(Pegawai $pegawai, Request $request)
    {
        return Inertia::render('Adminpage/Pegawai/EditPegawai', [
            'pegawai' => Pegawai::findOrFail($request->id),
            'pages' => 'Dashboard Pegawai',
            'title' => 'Edit Pegawai',
        ]);
    }
    public function update(Request $request, $id)
    {
        $pegawai = Pegawai::findOrFail($id);

        $validatedData = $request->validate([
            'nama' => 'required|max:255',
            'jabatan' => 'required|max:255',
            'pesan' => 'required',
            'foto' => 'nullable|file|mimes:jpeg,png,jpg|max:2048',
        ]);

        try {
            $pegawai->update($validatedData);

            if ($request->hasFile('foto')) {
                $this->handleFotoUpload($pegawai, $request->file('foto'));
            }

            return redirect()->route('dashboard.pegawai')->with('message', 'Data pegawai berhasil diperbarui');
        } catch (Exception $e) {
            return redirect()->back()->with('error', 'Terjadi kesalahan saat memperbarui data pegawai.');
        }
    }

    private function handleFotoUpload(Pegawai $pegawai, $foto)
    {
        try {
            $fotoName = time() . '_' . $foto->getClientOriginalName();
            $foto->storeAs('img/pegawais', $fotoName);

            $pegawai->foto = $fotoName;
            $pegawai->save();
        } catch (Exception $e) {
            // Handle any errors that occur during file upload
            throw new Exception('Terjadi kesalahan saat mengupload foto.');
        }
    }


    public function destroy(Pegawai $pegawai, Request $request)
    {
        $pegawai = Pegawai::find($request->id);
        //cek apakah di storage ada thumbnail
        if (Storage::exists('img/pegawais/' . $pegawai->thumbnail)) {
            Storage::delete('img/pegawais/' . $pegawai->thumbnail);
        }

        $pegawai->delete();

        return redirect()->route('dashboard.pegawai')->with('message', 'Data pegawai berhasil dihapus!');
    }
}