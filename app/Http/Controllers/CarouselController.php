<?php

namespace App\Http\Controllers;

use App\Http\Resources\CarouselCollection;
use App\Models\Carousel;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;


class CarouselController extends Controller
{
    private function fetchCarouselData()
    {
        $this->carousel = Carousel::orderByDesc('updated_at')->paginate(8);
        $this->allCarousel = Carousel::latest()->get();
    }

    public function index()
    {
        $this->fetchCarouselData();

        return Inertia::render('Adminpage/Carousel/Carousel', [
            'pages' => 'Banner',
            'title' => 'Banner',
            'carousel' => new CarouselCollection($this->carousel),
            'allCarousel' => new CarouselCollection($this->allCarousel),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $this->fetchCarouselData();

        return Inertia::render('Adminpage/Carousel/CreateCarousel', [
            'pages' => 'Banner',
            'title' => 'Banner',
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
            'name' => 'required',
            'img' => 'required|file|mimes:jpeg,png,jpg',
        ], [
            'required' => 'The :attribute field is required.',
            'img.required' => 'The thumbnail field is required.',
            'img.file' => 'The thumbnail must be a file.',
            'img.mimes' => 'The thumbnail must be a JPEG, PNG, or JPG file.',
        ]);

        try {
            $img = $validatedData['img'];
            $imgName = time() . '_' . Str::slug($img->getClientOriginalName());

            if (!$img->storeAs('img/carousels', $imgName)) {
                return redirect()->back()->with('error', 'Terjadi kesalahan saat mengupload img.');
            }

            $imgBudayaData = [
                'name' => $validatedData['name'],
                'img' => $imgName,
            ];

            Carousel::create($imgBudayaData);

            return redirect()->route('dashboard.gallery.budaya')->with('message', 'The image has been successfully added.');
        } catch (Exception $e) {
            return redirect()->back()->with('error', 'Terjadi kesalahan saat mengupload gambar.');
        }
    }

    public function edit(carousel $carousel, Request $request) {
        $carousels = $carousel->find($request->id);

        return Inertia::render('Adminpage/Carousel/EditCarousel', [
            'carousel' => $carousels,
            'pages' => 'banner',
            'title' => 'Edit Banner',
        ]);
    }

    public function update(Request $request, $id)
    {
        $carousel = Carousel::findOrFail($id);

        $validatedData = $request->validate([
            'name' => 'required',
            'img' => 'nullable',
        ]);

        try {
            $carousel->update($validatedData);

            if ($request->hasFile('img')) {
                $this->handleFotoUpload($carousel, $request->file('img'));
            }

            return redirect()->route('dashboard.carousel')->with('message', 'Data banner berhasil diperbarui');
        } catch (Exception $e) {
            return redirect()->back()->with('error', 'Terjadi kesalahan saat memperbarui data banner.');
        }
    }

    private function handleFotoUpload(Carousel $carousel, $img)
    {
        try {
            $imgName = time() . '_' . $img->getClientOriginalName();
            $img->storeAs('img/carousels', $imgName);

            $carousel->img = $imgName;
            $carousel->save();
        } catch (Exception $e) {
            // Handle any errors that occur during file upload
            throw new Exception('Terjadi kesalahan saat mengupload foto.');
        }
    }

    public function destroy(carousel $carousel, Request $request)
    {
        $img = Carousel::find($request->id);
        //cek apakah di storage ada thumbnail
        if (Storage::exists('img/gallery/budayas' . $img->img)) {
            Storage::delete('img/gallery/budayas' . $img->img);
        }

        $img->delete();

        return redirect()->route('dashboard.carousel')->with('message', 'banner berhasil dihapus!');
    }


}