<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\EventCollection;
use App\Models\Event;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

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
        $validatedData = $request->validate([
            'judul_event' => 'required',
            'deskripsi' => 'required',
            'tempat' => 'required',
            'tanggal_mulai' => 'required',
            'tanggal_selesai' => 'required',
            'thumbnail' => 'required|file|mimes:jpeg,png,jpg|max:2048',
            'kategori' => 'required',
        ], [
            'required' => 'The :attribute field is required.',
            'thumbnail.required' => 'The thumbnail field is required.',
            'thumbnail.file' => 'The thumbnail must be a file.',
            'thumbnail.mimes' => 'The thumbnail must be a JPEG, PNG, or JPG file.',
            'thumbnail.max' => 'The thumbnail may not be greater than 2048 kilobytes.',
        ]);

        try {
            $thumbnailFile = $request->file('thumbnail');
            $thumbnailName = time() . '_' . Str::slug($thumbnailFile->getClientOriginalName());
            $thumbnailFile->storeAs('img/events', $thumbnailName);

            $eventData = [
                'judul_event' => $validatedData['judul_event'],
                'deskripsi' => $validatedData['deskripsi'],
                'tempat' => $validatedData['tempat'],
                'tanggal_mulai' => $validatedData['tanggal_mulai'],
                'tanggal_selesai' => $validatedData['tanggal_selesai'],
                'thumbnail' => $thumbnailName,
                'kategori' => $validatedData['kategori'],
            ];

            Event::create($eventData);

            return redirect()->route('dashboard.events')->with('message', 'Data event berhasil ditambahkan');
        } catch (Exception $e) {
            return redirect()->back()->with('error', 'Terjadi kesalahan saat mengupload gambar.');
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
        $event = Event::findOrFail($id);

        $validatedData = $request->validate([
            'judul_event' => 'required|max:255',
            'deskripsi' => 'required',
            'tempat' => 'required|max:255',
            'tanggal_mulai' => 'required',
            'tanggal_selesai' => 'required',
            'thumbnail' => 'nullable|max:2048',
            'kategori' => 'required|max:255',
        ]);

        try {
            $event->update($validatedData);

            if ($request->hasFile('thumbnail')) {
                $this->handleThumbnailUpload($event, $request->file('thumbnail'));
            }

            return redirect()->route('dashboard.events')->with('message', 'Data event berhasil diperbarui');
        } catch (Exception $e) {
            return redirect()->back()->with('error', 'Terjadi kesalahan saat memperbarui data event.');
        }
    }

    private function handleThumbnailUpload(Event $event, $thumbnail)
    {
        $thumbnailName = time() . '_' . $thumbnail->getClientOriginalName();
        $thumbnail->storeAs('img/events', $thumbnailName);

        $event->thumbnail = $thumbnailName;
        $event->save();
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