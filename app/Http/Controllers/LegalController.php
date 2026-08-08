<?php

namespace App\Http\Controllers;

use Illuminate\View\View;

class LegalController extends Controller
{
    public function terms(): View
    {
        return view('legal.terms');
    }
}
