<?php

namespace App\Http\Controllers;

use App\Models\PartnerUser;
use Illuminate\Http\Request;

class UserPartnersController extends Controller
{
    public function update(Request $request, $userId) {
        $requestData = $request->all();
        PartnerUser::where('user_id', $userId)->delete();

        if(count($requestData) > 0) {
            foreach ($requestData as $partner) {
                PartnerUser::create(array("user_id" => $userId, "partner_id" => $partner["id"]));
            }
        }
    }
}
