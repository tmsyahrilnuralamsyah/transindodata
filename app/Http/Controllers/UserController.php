<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Harga;
use App\Models\Data;

class UserController extends Controller
{
    public function daftar()
    {
        $harga = Harga::find(1);
        $data = Data::orderBy('id', 'desc')->get();
        return view('daftar', ['harga' => $harga, 'data' => $data]);
    }
    
    public function tambah(Request $request)
    {
        $uang = Harga::find(1);
        $harga = $request->organik * $uang->organik + $request->plastik * $uang->plastik + $request->logam * $uang->logam + $request->kaca * $uang->kaca;

        Data::create([
            'nama' => $request->nama,
            'organik' => $request->organik,
            'plastik' => $request->plastik,
            'logam' => $request->logam,
            'kaca' => $request->kaca,
            'harga' => $harga,
            'status' => "Menunggu"
    	]);

    	return redirect()->back()->with('success', 'Data berhasil disimpan')->withInput();
    }
}
