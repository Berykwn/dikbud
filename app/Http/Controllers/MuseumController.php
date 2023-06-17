<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\MuseumCollection;
use App\Models\Museum;
use Inertia\Inertia;


class MuseumController extends Controller
{
    public function getAllMuseum()
    {
        $museum = new MuseumCollection(Museum::orderByDesc('updated_at')->paginate(6));
        $allMuseum = new MuseumCollection(Museum::latest()->get());

        return Inertia::render('Museum', [
            'pages' => 'Museum',
            'title' => 'Museum',
            'museum' => $museum,
            'allMuseum' => $allMuseum
        ]);
    }

    public function detailMuseumPage(museum $museum, Request $request)
    {
        $museumDetail = $museum->find($request->id);
        $gambarMuseums = $museumDetail->gambarMuseums()->where('museum_id', $request->id)->get();
        return Inertia::render('DetailMuseum', [
            'pages' => 'Museum',
            'title' => 'Museum',
            'museumDetail' => $museumDetail,
            'gambarMuseum' => $gambarMuseums
        ]);
    }

    public function index()
    {
        //
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show(Museum $museum)
    {
        //
    }

    public function edit(Museum $museum)
    {
        //
    }

    public function update(Request $request, Museum $museum)
    {
        //
    }

    public function destroy(Museum $museum)
    {
        //
    }
}