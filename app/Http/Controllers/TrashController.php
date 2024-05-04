<?php

namespace App\Http\Controllers;

use App\Models\Trash;
use Illuminate\Http\Request;

class TrashController extends Controller
{
    public function index()
    {
        $trash = Trash::all();
        return response()->json($trash);
    }

    public function store(Request $request)
    {
        $request->validate([
            'photo' => 'required|image|max:2048',
            'address' => 'required|string',
            'request_comment' => 'nullable|string',
            'confirmation_photo' => 'nullable|image|max:2048',
            'price' => 'required|numeric',
        ]);

        $photoPath = $request->file('photo')->store('photos');

        $confirmationPhotoPath = null;
        if ($request->hasFile('confirmation_photo')) {
            $confirmationPhotoPath = $request->file('confirmation_photo')->store('confirmation_photos');
        }

        $trash = new Trash();
        $trash->photo_url = $photoPath;
        $trash->address = $request->address;
        $trash->request_comment = $request->request_comment;
        $trash->confirmation_photo_url = $confirmationPhotoPath;
        $trash->price = $request->price;
        $trash->save();

        return response()->json(['message' => 'Trash created successfully', 'data' => $trash], 201);
    }

}
