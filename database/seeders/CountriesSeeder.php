<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CountriesSeeder extends Seeder
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
                'name' => 'Colombia',
            ]
            // Add more states as needed
        ];

        DB::table('countries')->delete();
        // Insert data into the 'states' table
        DB::table('countries')->insert($countries);
    }
}
