<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HargaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('harga')->insert([
            'organik' => 0,
            'plastik' => 0,
            'logam' => 0,
            'kaca' => 0
        ]);
    }
}
