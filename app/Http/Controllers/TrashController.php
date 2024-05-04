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

    public function trashByCity(Request $request, string $thiscity)
    {
        $trash = Trash::where('city', $thiscity)->get();
        return response()->json($trash);
    }
    public function store(Request $request)
    {
        $request->validate([
            'photo' => 'required|image|max:2048',
            'address' => 'required|string',
            'city' => 'required|image|max:2048',
            'request_comment' => 'nullable|string',
            'confirmation_photo' => 'nullable|image|max:2048',
            'price' => 'required|numeric',
            //'caller_id'=>'required|integer',
            //'utilizator_id'=>'required|integer',
            'trash_status'=>'required|integer'
        ]);

        $photoPath = $request->file('photo')->store('photos');

        $confirmationPhotoPath = null;
        if ($request->hasFile('confirmation_photo')) {
            $confirmationPhotoPath = $request->file('confirmation_photo')->store('confirmation_photos');
        }

        $trash = new Trash();
        $trash->photo_url = $photoPath;
        $trash->address = $request->address;
        $trash->city = $request->city;
        //$trash->caller_id = $request->index('user_id');
        $trash->request_comment = $request->request_comment;
        $trash->confirmation_photo_url = $confirmationPhotoPath;
        $trash->price = $request->price;
        $trash->save();

        return response()->json(['message' => 'Trash created successfully', 'data' => $trash], 201);
    }

}
