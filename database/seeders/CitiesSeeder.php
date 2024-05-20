<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CitiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Sample states data
        $countries = [
            [
                'id' => 1,
                'state_id' => 24,
                'name' => 'Armenia'
            ],
            [
                'id' => 2,
                'state_id' => 24,
                'name' => 'Calarcá'
            ],
            [
                'id' => 3,
                'state_id' => 24,
                'name' => 'La Tebaida'
            ],
            [
                'id' => 4,
                'state_id' => 24,
                'name' => 'Montenegro'
            ],
            [
                'id' => 5,
                'state_id' => 24,
                'name' => 'Quimbaya'
            ]
            // Add more states as needed
        ];

        DB::table('cities')->delete();
        // Insert data into the 'states' table
        DB::table('cities')->insert($countries);
    }
}
