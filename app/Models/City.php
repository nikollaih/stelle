<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    use HasFactory;

    protected $fillable = [
        'state_id',
        'name'
    ];

    public function getByState($stateId) {
        return City::where('state_id', '=', $stateId)->get();
    }

    public function State(){
        return $this->belongsTo(State::class);
    }
}
