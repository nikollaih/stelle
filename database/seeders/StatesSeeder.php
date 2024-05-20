<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $states = [
            [
                'id' => 1,
                'name' => 'Amazonas',
                'country_id' => 1
            ],
            [
                'id' => 2,
                'name' => 'Antioquia',
                'country_id' => 1
            ],
            [
                'id' => 3,
                'name' => 'Arauca',
                'country_id' => 1
            ],
            [
                'id' => 4,
                'name' => 'Atlántico',
                'country_id' => 1
            ],
            [
                'id' => 5,
                'name' => 'Bolívar',
                'country_id' => 1
            ],
            [
                'id' => 6,
                'name' => 'Boyacá',
                'country_id' => 1
            ],
            [
                'id' => 7,
                'name' => 'Caldas',
                'country_id' => 1
            ],
            [
                'id' => 8,
                'name' => 'Caquetá',
                'country_id' => 1
            ],
            [
                'id' => 9,
                'name' => 'Casanare',
                'country_id' => 1
            ],
            [
                'id' => 10,
                'name' => 'Cauca',
                'country_id' => 1
            ],
            [
                'id' => 11,
                'name' => 'Cesar',
                'country_id' => 1
            ],
            [
                'id' => 12,
                'name' => 'Chocó',
                'country_id' => 1
            ],
            [
                'id' => 13,
                'name' => 'Córdoba',
                'country_id' => 1
            ],
            [
                'id' => 14,
                'name' => 'Cundinamarca',
                'country_id' => 1
            ],
            [
                'id' => 15,
                'name' => 'Guainía',
                'country_id' => 1
            ],
            [
                'id' => 16,
                'name' => 'Guaviare',
                'country_id' => 1
            ],
            [
                'id' => 17,
                'name' => 'Huila',
                'country_id' => 1
            ],
            [
                'id' => 18,
                'name' => 'La Guajira',
                'country_id' => 1
            ],
            [
                'id' => 19,
                'name' => 'Magdalena',
                'country_id' => 1
            ],
            [
                'id' => 20,
                'name' => 'Meta',
                'country_id' => 1
            ],
            [
                'id' => 21,
                'name' => 'Nariño',
                'country_id' => 1
            ],
            [
                'id' => 22,
                'name' => 'Norte de Santander',
                'country_id' => 1
            ],
            [
                'id' => 23,
                'name' => 'Putumayo',
                'country_id' => 1
            ],
            [
                'id' => 24,
                'name' => 'Quindío',
                'country_id' => 1
            ],
            [
                'id' => 25,
                'name' => 'Risaralda',
                'country_id' => 1
            ],
            [
                'id' => 26,
                'name' => 'San Andrés y Providencia',
                'country_id' => 1
            ],
            [
                'id' => 27,
                'name' => 'Santander',
                'country_id' => 1
            ],
            [
                'id' => 28,
                'name' => 'Sucre',
                'country_id' => 1
            ],
            [
                'id' => 29,
                'name' => 'Tolima',
                'country_id' => 1
            ],
            [
                'id' => 30,
                'name' => 'Valle del Cauca',
                'country_id' => 1
            ],
            [
                'id' => 31,
                'name' => 'Vaupés',
                'country_id' => 1
            ],
            [
                'id' => 32,
                'name' => 'Vichada',
                'country_id' => 1
            ],
        ];

        DB::table('states')->delete();
        // Insert data into the 'states' table
        DB::table('states')->insert($states);
    }
}
