<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserService extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'cities',
        'categories'
    ];

    public function User() {
        return $this->belongsTo(User::class);
    }

    // Accessor to unserialize the 'categories' column
    public function getCategoriesAttribute($value)
    {
        return unserialize($value);
    }

    // Accessor to unserialize the 'categories' column
    public function getCitiesAttribute($value)
    {
        return unserialize($value);
    }
}
