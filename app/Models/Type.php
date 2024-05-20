<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    use HasFactory;

    protected $fillable = [
      'id',
      'name'
    ];

    public function Categories() {
        return $this->hasMany(Category::class);
    }

    public function getTypesWithCategories() {
        return Type::select('id', 'name')
            ->with('Categories')
            ->get();
    }
}
