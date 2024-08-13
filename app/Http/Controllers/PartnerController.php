<?php

namespace App\Http\Controllers;

use App\Http\Requests\PartnerCreateRequest;
use App\Models\Partner;
use App\Services\ImageService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PartnerController extends Controller
{
    public function index() {
        $partners = Partner::all();
        return Inertia::render('Partner/Index', [
            'partners' => $partners
        ]);
    }

    public function create() {
        return Inertia::render('Partner/Create');
    }

    public function store(PartnerCreateRequest $request) {
        $partnerRequest = $request->validated();

        // Verificar si se ha subido una imagen
        if ($request->hasFile('file')) {
            // Obtener el archivo
            $file = $request->file('file');

            // Manejar la carga de la imagen
            $partnerRequest['logo'] = ImageService::handleUpload($file, 'partners');

            unset($partnerRequest["file"]);
        }

        Partner::create($partnerRequest);
    }

    public function edit($partnerId) {
        $partner = Partner::find($partnerId);
        return Inertia::render('Partner/Edit', [
            'partner' => $partner
        ]);
    }

    public function update(PartnerCreateRequest $request, $partnerId) {
        $partnerRequest = $request->validated();
        $partner = Partner::find($partnerId);

        // Verificar si se ha subido una imagen
        if ($request->hasFile('file')) {
            // Obtener el archivo
            $file = $request->file('file');

            // Manejar la carga de la imagen
            $partnerRequest['logo'] = ImageService::handleUpload($file, 'partners');

            // Convertir la ruta completa a una ruta relativa al almacenamiento
            $relativePath = str_replace('/storage/', 'public/', $partner->id);

            // Eliminar el archivo
            if (Storage::exists($relativePath)) {
                Storage::delete($relativePath);
            }

            unset($partnerRequest["file"]);
        }

        Partner::where('id', $partnerId)->update($partnerRequest);
    }

    public function destroy($partnerId) {
        Partner::where('id', $partnerId)->delete();
    }
}
