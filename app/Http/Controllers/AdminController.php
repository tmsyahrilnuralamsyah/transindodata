<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Harga;
use App\Models\Data;

class AdminController extends Controller
{
    public function dashboard()
    {
        $harga = Harga::find(1);
        $data = Data::orderBy('id', 'desc')->get();
        return view('dashboard', ['harga' => $harga, 'data' => $data]);
    }

    public function ubahHarga($id, Request $request)
    {
        $harga = Harga::find($id);
        $harga->organik = $request->uang_organik;
        $harga->plastik = $request->uang_plastik;
        $harga->logam = $request->uang_logam;
        $harga->kaca = $request->uang_kaca;
        $harga->save();

        return redirect()->back()->with('success', 'Harga sampah berhasil diubah')->withInput();
    }

    public function konfirmasi($id)
    {
        $data = Data::find($id);
        $data->status = "Selesai";
        $data->save();

        return redirect()->back()->with('success', 'Data telah dikonfirmasi')->withInput();
    }

    public function hapus($id)
    {
        $data = Data::find($id);
        $data->delete();
        return redirect()->back()->with('success', 'Data berhasil dihapus')->withInput();
    }
}
