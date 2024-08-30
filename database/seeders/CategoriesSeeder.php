<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['type_id' => 1, 'name' => 'Tecnología'],
            ['type_id' => 1, 'name' => 'Electrodomésticos'],
            ['type_id' => 3, 'name' => 'Acarreos'],
            ['type_id' => 3, 'name' => 'Adecuaciones'],
            ['type_id' => 3, 'name' => 'Piscinas'],
            ['type_id' => 3, 'name' => 'Jardinería'],
            ['type_id' => 3, 'name' => 'Control de plagas'],
            ['type_id' => 2, 'name' => 'Enchapes'],
            ['type_id' => 2, 'name' => 'Obra blanca'],
            ['type_id' => 2, 'name' => 'Obra negra'],
            ['type_id' => 2, 'name' => 'Pintura'],
            ['type_id' => 2, 'name' => 'Carpintería'],
            ['type_id' => 2, 'name' => 'Soldadura'],
            ['type_id' => 2, 'name' => 'Fontanería'],
            ['type_id' => 2, 'name' => 'Cerrajería'],
            ['type_id' => 2, 'name' => 'Electricidad'],
            ['type_id' => 2, 'name' => 'Gas'],
            ['type_id' => 2, 'name' => 'Soportes de TV'],
        ];

        DB::table('categories')->delete();
        // Insert data into the 'states' table
        DB::table('categories')->insert($categories);
    }
}
