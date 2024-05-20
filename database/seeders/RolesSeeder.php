<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Sample states data
        $roles = [
            [
                'id' => 1,
                'name' => 'Admin',
                'role' => 'admin'
            ],
            [
                'id' => 2,
                'name' => 'Contratante',
                'rol' => 'contratante'
            ],
            [
                'id' => 3,
                'name' => 'Contratista',
                'rol' => 'contratista'
            ]
            // Add more states as needed
        ];

        DB::table('roles')->delete();
        // Insert data into the 'states' table
        DB::table('roles')->insert($roles);
    }
}
