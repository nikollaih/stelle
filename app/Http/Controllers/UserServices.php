<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserServicesUpdateRequest;
use App\Models\UserService;
use Illuminate\Http\Request;

class UserServices extends Controller
{
    public function update(UserServicesUpdateRequest $request, $userId)
    {
        $servicesRequest = $request->except(['created_at']);
        $servicesRequest["cities"] = serialize($servicesRequest["cities"]);
        $servicesRequest["categories"] = serialize($servicesRequest["categories"]);
        $servicesRequest["updated_at"] = date("Y-m-d H:i:s");
        UserService::where('user_id', $userId)->update($servicesRequest);
    }
}
