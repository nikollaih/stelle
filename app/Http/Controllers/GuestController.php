<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Models\Type;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class GuestController extends Controller
{
    public function index(Request $request): \Inertia\Response
    {
        $Type = new Type();
        $City = new City();
        $User = new User();
        $cities = $City->getByState(24);
        $types = $Type->getTypesWithCategories();
        $contratistas = $User->getWithFilter(false, []);


        // Verificar si se ha enviado una solicited POST con datos de filtration
        if ($request->isMethod('post')) {
            $tempCity = $City::find(1);
            $city = (count($request->location) > 0) ? $request->location[0] : $tempCity;

            $contratistas = $User->getWithFilter($city, $request->categories);
        }

        return Inertia::render('GuestDashboard', [
            "cities" => $cities,
            "types" => $types,
            "contratistas" => $contratistas
        ]);
    }
}
