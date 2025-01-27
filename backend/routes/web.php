<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('api/echo', function () {
    return response()->json(['message' => 'Hello, World!']);
});
