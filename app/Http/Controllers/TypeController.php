<?php

namespace App\Http\Controllers;

use App\Models\Type;
use Illuminate\Http\Request;

class TypeController extends Controller
{
    public function index(Request $request) {
        // Get the types and categories
        $types = Type::with("Categories")->get();

        // Return a JSON object
        return response()->json($types, 200);
    }
}
