---
pageClass: no-toc
---

# Ejercicio paso #3

Actualizaremos el controlador de productos creado en en ejercicio de los `Modelos`


Archivo ubicado en `App\Http\Controllers\ProductController`

``` php {17-21,31,42-55,66-68,79-81,93-106,117-120}
<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the product.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();

        return view('products.index', [
            'products' => $products
        ]);
    }

    /**
     * Show the form for creating a new product.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('products.create');
    }

    /**
     * Store a newly created product in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'max:150'],
            'description' => ['max:500'],
            'price' => ['required'],
        ]);

        $product = Product::create($request->only(
            'name',
            'description',
            'price',
        ));

        return redirect()->route('products.show', [$product])
                ->with('status', 'Product created!');
    }

    /**
     * Display the specified product.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return view('products.show', [
            'product' => $product
        ]);
    }

    /**
     * Show the form for editing the specified product.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        return view('products.edit', [
            'product' => $product
        ]);
    }

    /**
     * Update the specified product in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $request->validate([
            'name' => ['required', 'max:150'],
            'description' => ['max:500'],
            'price' => ['required'],
        ]);

        $product->update($request->only([
            'name',
            'description',
            'price',
        ]));

        return redirect()->route('products.show', [$product])
                ->with('status', 'Product updated!');
    }

    /**
     * Remove the specified product from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return redirect()->route('products.index')
            ->with('status', 'Product deleted!');
    }
}

```