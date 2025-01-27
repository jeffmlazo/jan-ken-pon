<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('api/echo', function () {
//     return response()->json(['message' => 'Hello, World!']);
// });

// Route::group(['middleware' => \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class], function () {
//     Route::get('/sanctum/csrf-cookie', function () {
//         return response()->json(['message' => 'CSRF cookie set successfully.']);
//     });
// });

Route::post('api/play', function (Request $request) {
    $userChoice = $request->input('choice');
    $choices = ['rock', 'paper', 'scissors'];
    $playerChoice = $choices[array_rand($choices)];

    if ($userChoice === $playerChoice) {
        $result = 'tie';
    } elseif (
        ($userChoice === 'rock' && $playerChoice === 'scissors') ||
        ($userChoice === 'paper' && $playerChoice === 'rock') ||
        ($userChoice === 'scissors' && $playerChoice === 'paper')
    ) {
        $result = 'win';
    } else {
        $result = 'lose';
    }

    return response()->json([
        'player_choice' => $playerChoice,
        'result' => $result,
    ]);
});
