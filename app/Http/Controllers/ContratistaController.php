<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContratistaCreateRequest;
use App\Http\Requests\ContratistaUpdateRequest;
use App\Http\Requests\ProfileUpdateRequest;
use App\Models\City;
use App\Models\Partner;
use App\Models\Type;
use App\Models\User;
use App\Models\UserService;
use App\Services\ImageService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ContratistaController extends ProfileController
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('Contratistas/Index', [
            'csrfToken' => csrf_token()
        ]);
    }
    public function create(): \Inertia\Response
    {
        $City = new City();
        $cities = $City->getByState(24);

        return Inertia::render('Contratistas/Create', [
            "cities" => $cities
        ]);
    }

    public function store(ContratistaCreateRequest $request) {
        $contratistaRequest = $request->all();
        $contratistaRequest["password"] = Hash::make($request->get("document"));
        $user = User::create($contratistaRequest);
        UserService::create([
            "user_id" => $user->id,
            "cities" => serialize([]),
            "categories" => serialize([])
        ]);
    }

    public function search($document) {
        $contratista = User::where('document', $document)
            ->with('City')
            ->where('role_id', 3)
            ->first();

        if($contratista) {
            return response()->json($contratista, 200);
        }

        return response()->json(null, 201);
    }

    public function edit($id): \Inertia\Response
    {
        $City = new City();
        $cities = $City->getByState(24);
        $User = new User();
        $profile = $User->Get($id);
        // Get the types and categories
        $types = Type::with("Categories")->get();
        $partners = Partner::all();

        // Asegurando que services es un objeto y no un array
        if ($profile->services !== null) {
            $profile->services->cities = unserialize($profile->services->cities) ?? [];
            $profile->services->categories = unserialize($profile->services->categories) ?? [];
        } else {
            $profile->services = (object) [
                'cities' => [],
                'categories' => []
            ];
        }

        return Inertia::render('Contratistas/Edit', [
            'csrfToken' => csrf_token(),
            'cities' => $cities,
            'profile' => $profile,
            'types' => $types,
            'partners' => $partners
        ]);
    }

    public function updateContratista(ContratistaUpdateRequest $request, $userId)
    {
        $contratistaRequest = $request->all();
        $user = User::find($userId);

        // Verificar si se ha subido una imagen
        if ($request->hasFile('file')) {
            // Obtener el archivo
            $file = $request->file('file');

            // Manejar la carga de la imagen
            $contratistaRequest['profile_picture'] = ImageService::handleUpload($file);

            // Convertir la ruta completa a una ruta relativa al almacenamiento
            $relativePath = str_replace('/storage/', 'public/', $user->profile_picture);

            // Eliminar el archivo
            if (Storage::exists($relativePath)) {
                Storage::delete($relativePath);
            }

            unset($contratistaRequest["file"]);
        }

       User::where('id', $userId)->update($contratistaRequest);
    }
}
