<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{

    public function front()
    {

       return view('front.front');

    }

    public function back()
    {

       return view('back.back');

    }


}
