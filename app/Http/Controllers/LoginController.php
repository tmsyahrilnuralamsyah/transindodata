<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function showLogin()
    {
        return view('login');
    }

    public function doLogin(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);

        if (Auth::attempt(['username' => $request->username, 'password' => $request->password])) {
            return redirect(route('dashboard'))->with('success', 'Login berhasil')->withInput();
        } else {
            return redirect(route('login'))->with('error', 'Username atau password salah')->withInput();
        }
    }

    public function logout()
    {
        Auth::logout();
        return redirect(route('login'))->with('success', 'Logout berhasil')->withInput();
    }
}
