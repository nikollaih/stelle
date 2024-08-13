<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'city_id',
        'role_id',
        'document',
        'name',
        'email',
        'password',
        'phone_number',
        'whatsapp_number',
        'about',
        'birthdate',
        'active',
        'payment_date',
        'profile_picture',
        'profession'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function Partners() {
        return $this->belongsToMany(Partner::class);
    }

    public function City() {
        return $this->belongsTo(City::class);
    }

    public function Role() {
        return $this->belongsTo(Role::class);
    }

    public function Services() {
        return $this->hasOne(UserService::class);
    }

    public function Get($userId) {
        return User::where('id', '=', $userId)
            ->with('Services')
            ->with('City')
            ->with('Partners')
            ->first();
    }

    public function getWithFilter($city, $categories) {
        return User::where('role_id', 3)
            ->where('active', 1)
            ->whereHas('Services', function ($query) use ($city, $categories) {
                if($city) {
                    $query->where('cities', 'like', '%"id";i:' . $city["id"] . '%');
                    $query->where('cities', 'like', '%' . $city["name"] . '%');
                }
                if(is_array($categories) && count($categories) > 0) {
                    foreach ($categories as $category) {
                        $query->where('categories', 'like', '%"id";i:'.$category["id"].'%');
                    }
                }
            })
            ->get();
    }
}
