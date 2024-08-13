<?php

namespace App\Http\Controllers;

use App\Models\City;

class CityController extends Controller
{
    public function index() {
        $City = new City();
        $cities = $City->getByState(24);

        return response()->json($cities);
    }
}
