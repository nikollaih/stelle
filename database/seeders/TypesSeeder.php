<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $types = [
            [
                'id' => 1,
                'name' => 'Mantenimiento y reparaciones'
            ],
            [
                'id' => 2,
                'name' => 'Varios'
            ],
            [
                'id' => 3,
                'name' => 'Especiales'
            ],
        ];

        DB::table('types')->delete();
        // Insert data into the 'states' table
        DB::table('types')->insert($types);
    }
}
