<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\EventCollection;
use App\Models\Event;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class EventController extends Controller 
{
    private $event;
    private $allEvent;
 
    public function getAllEvent()
    {
        $this->event = Event::orderByDesc('updated_at')->paginate(8);
        $this->allEvent = Event::latest()->get();
        return Inertia::render('Event', [
            'pages' => 'Event',
            'title' => 'Event',
            'event' => new EventCollection($this->event),
            'allEvent' => new EventCollection($this->allEvent),
        ]);
    }

    public function detailEventPage(Event $event, Request $request)
    {
        $eventDetail = $event->find($request->id);

        if (!$eventDetail) {
            abort(404, 'Event not found');
        }

        $this->event = Event::orderByDesc('updated_at')->paginate(4);
        return Inertia::render('DetailEvent', [
            'pages' => 'Event',
            'title' => 'Detail Event',
            'event' => new EventCollection($this->event),
            'eventDetail' => $eventDetail,
        ]);
    }

    public function index()
    {
        $this->event = Event::orderByDesc('updated_at')->paginate(8);
        $this->allEvent = Event::latest()->get();
        
        return Inertia::render('Adminpage/Events/Events', [
            'pages' => 'Events',
            'title' => 'Dashboard Events',
            'event' => new EventCollection($this->event),
            'allEvent' => new EventCollection($this->allEvent),
        ]);
    }

    public function create()
    {
        return Inertia::render('Adminpage/Events/CreateEvent', [
            'pages' => 'Events',
            'title' => 'Tambah Event',
        ]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'judul_event' => 'required',
            'deskripsi' => 'required',
            'tempat' => 'required',
            'tanggal_mulai' => 'required',
            'tanggal_selesai' => 'required',
            'gambar' => 'required|file|mimes:jpeg,png,jpg|max:2048',
            'kategori' => 'required',
        ]);

        if ($request->hasFile('gambar')) {
            $gambar = $request->file('gambar');
            $gambarName = time() . '_' . $gambar->getClientOriginalName();

            $gambar->storeAs('img/events', $gambarName); // Simpan gambar ke direktori yang ditentukan

            $event = new Event();
            $event->judul_event = $request->input('judul_event');
            $event->deskripsi = $request->input('deskripsi');
            $event->tempat = $request->input('tempat');
            $event->tanggal_mulai = $request->input('tanggal_mulai');
            $event->tanggal_selesai = $request->input('tanggal_selesai');
            $event->gambar = $gambarName; // Update URL gambar
            $event->kategori = $request->input('kategori');
            $event->save();

            return redirect()->route('dashboard.events')->with('message', 'Data event berhasil ditambahkan');
        } else {
            return redirect()->back()
                ->withErrors(['gambar' => 'Berkas gambar tidak ditemukan atau tidak valid. Pastikan memilih berkas gambar dengan benar, dalam format JPEG atau PNG, dan ukuran maksimal 2MB'])
                ->withInput();
        }
    }

    public function show(Event $event, Request $request)
    {
        $eventDetail = $event->find($request->id);

        if (!$eventDetail) {
            abort(404, 'Event not found');
        }

        return Inertia::render('Adminpage/Events/DetailEvent', [
            'eventDetail' => $eventDetail,
            'pages' => 'Events',
            'title' => 'Detail Events',
        ]);
    }

    public function edit(Event $event, Request $request)
    {
        $events = $event->find($request->id);

        if (!$events) {
            abort(404, 'Event not found');
        }

        return Inertia::render('Adminpage/Events/EditEvent', [
            'event' => $events,
            'pages' => 'Events',
            'title' => 'Edit Events',
        ]);
    }
 
    public function update(Request $request, $id)
    {
        $event = Event::find($id);

        $validatedData = $request->validate([
            'judul_event' => 'required|max:255',
            'deskripsi' => 'required',
            'tempat' => 'required|max:255',
            'tanggal_mulai' => 'required',
            'tanggal_selesai' => 'required',
            'gambar' => 'nullable|max:2048',
            'kategori' => 'required|max:255',
        ]);

        $event->update($validatedData);

        if ($request->hasFile('gambar')) {
            $gambar = $request->file('gambar');
            if ($gambar) {
                $namaGambar = time() . '_' . $gambar->getClientOriginalName();
                $gambar->storeAs('img/events', $namaGambar); // Simpan gambar ke direktori yang ditentukan
                $event->gambar = $namaGambar;
                $event->save();
            }
        }
        return to_route('dashboard.events')->with('message', 'Data Event berhasil diperbarui');
    }

    public function destroy(Event $event, Request $request)
    {
        $event = Event::find($request->id);

        if (Storage::exists('img/events/' . $event->gambar)) {
            Storage::delete('img/events/' . $event->gambar);
        }

        $event->delete();
        return redirect()->route('dashboard.events')->with('message', 'Data event berhasil dihapus!');
    }
}