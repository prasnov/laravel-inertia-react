<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::orderBy('id', 'desc')->paginate(5);
        return Inertia::render('Product/Index', [
            'products' => $products,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia('Product/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'code' => 'required|size:6|unique:products,code',
            'price' => 'required',
            'description' => 'nullable',
            'stock' => 'required',
            'photo' => 'nullable|image',
        ]);

        // dd($request->file('photo')->getClientOriginalExtension());

        $dataStore = [
            'name' => $request->name,
            'code' => $request->code,
            'price' => $request->price,
            'stock' => $request->stock,
            'description' => $request->filled('description') ? $request->description : null,
        ];

        if ($request->status) {
            $dataStore['status'] = 'sale';
        } else {
            $dataStore['status'] = 'not sale';
        }


        if ($request->hasFile('photo')) {
            $photo = $request->file('photo');
            $photo->storeAs('public/products/', $dataStore['code'] . "." . $photo->getClientOriginalExtension());
            $dataStore['photo'] = "products/" . $dataStore['code'] . "." . $photo->getClientOriginalExtension();
        }

        Product::create($dataStore);

        return to_route('product.index')->with('msg', 'Product has been added');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return Inertia::render('Product/Show', [
            'product' => $product
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        return Inertia::render('Product/Edit', [
            'product' => $product,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {

        // dd($request->all());

        $request->validate([
            'name' => 'required',
            'code' => 'required|size:6|unique:products,code,' . $product->id,
            'price' => 'required',
            'stock' => 'required',
            'description' => 'nullable',
            'photo' => 'nullable|image',
        ]);



        $dataUpdate = [
            'name' => $request->name,
            'code' => $request->code,
            'price' => $request->price,
            'stock' => $request->stock,
            'description' => $request->filled('description') ? $request->description : null,
        ];

        if ($request->status) {
            $dataUpdate['status'] = "sale";
        } else {
            $dataUpdate['status'] = "not sale";
        }

        if ($request->hasFile('photo')) {
            if ($product->photo) {
                Storage::delete('public/' . $product->photo);
                $photo = $request->file('photo');
                $photo->storeAs('public/products/', $request->code . "." . $photo->getClientOriginalExtension());
                $dataUpdate['photo'] = "products/" . $request->code . "." . $photo->getClientOriginalExtension();
            }
        }

        $product->update($dataUpdate);

        return to_route('product.index')->with('msg', 'Data has been updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        if ($product->photo) {
            Storage::delete("public/" . $product->photo);
        }
        $product->delete();
        return to_route('product.index')->with('msg', "{$product->name} has been deleted");
    }
}
