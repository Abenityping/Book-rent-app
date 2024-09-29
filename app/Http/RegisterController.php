<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        // Validation
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8|confirmed',
            'location' => 'required|string|max:255',
            'phone_number' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        // Create a new owner user
        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'location' => $request->location,
            'phone_number' => $request->phone_number,
            'role' => 'owner', // Assign owner role
        ]);

        return response()->json(['message' => 'Registration successful'], 201);
    }
}
