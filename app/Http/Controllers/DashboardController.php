<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Models\Type;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    //
    public function index(Request $request): \Inertia\Response
    {
        $Type = new Type();
        $City = new City();
        $User = new User();
        $user = $User->Get(Auth::id());
        $cities = $City->getByState(24);
        $types = $Type->getTypesWithCategories();
        $contratistas = $User->getWithFilter($user->City, []);


        // Verificar si se ha enviado una solicitud POST con datos de filtrado
        if ($request->isMethod('post')) {
            $tempCity = $City::find($user["city_id"]);
            $city = (count($request->location) > 0) ? $request->location[0] : $tempCity;
            $contratistas = $User->getWithFilter($city, $request->categories);
        }

        return Inertia::render('Dashboard', [
            "cities" => $cities,
            "types" => $types,
            "contratistas" => $contratistas
        ]);
    }
}
