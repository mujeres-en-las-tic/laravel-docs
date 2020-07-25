---
pageClass: no-toc
---

# Ejercicio paso #5

Ahora actualizaremos las vistas de la carpeta `products`, para tener la funcional de un CRUD (Crear, Leer, Actualizar y Eliminar Productos)

## Página Listado de Productos

Archivo `resources\view\productos\index.blade.php`

```php{10-31}
@extends('layout')

@section('title')
    Productos
@endsection

@section('content')
  <h1>Listado de Productos</h1>  

  <a href="{{ route('products.create') }}">Crear Producto</a>

  @foreach ($products as $product)
    
    <h4><strong>Producto:</strong> {{ $product->name }} </h4>
    <p><strong>Descripción:</strong> {{ $product->description }} </p>
    <strong>Precio:</strong> {{ $product->price }}
    <br>
    <a href="{{ route('products.edit', [$product]) }}">Editar Producto</a>

    <form action="{{ route('products.destroy', [$product] ) }}" method="POST">
      @csrf

      @method('delete')
      
      <input type="submit" value="Eliminar Producto">

    </form>

    <hr>
    
  @endforeach

@endsection
```

## Página Crear Producto

Archivo `resources\view\productos\create.blade.php`

```php{10-38}
@extends('layout')

@section('title')
    Crear Producto
@endsection

@section('content')

  <h1>Crear Producto</h1>  
  <a href="{{ route('products.index') }}">Todos los Productos</a>

  <form action="{{ route('products.store') }}" method="POST">
    @csrf

    <label for="name">Nombre</label>
    <input type="text" name="name" id="name" value="{{ old('name') }}">

    @error('name')
      <div class="alert alert-danger">{{ $message }}</div>
    @enderror

    <label for="description">Descripción</label>
    <input type="text" name="description" id="description" value="{{ old('description') }}">

    @error('description')
      <div class="alert alert-danger">{{ $message }}</div>
    @enderror

    <label for="price">Precio</label>
    <input type="number" name="price" id="price" value="{{ old('price') }}">

    @error('price')
      <div class="alert alert-danger">{{ $message }}</div>
    @enderror

    <input type="submit" value="Guardar Producto">

  </form>
@endsection
```

## Página Detalles de Producto

Archivo `resources\view\productos\show.blade.php`

```php{10-23}
@extends('layout')

@section('title')
    Detalles de Producto
@endsection

@section('content')
  <h1>Detalles de Producto</h1> 
  
  h4><strong>Producto:</strong> {{ $product->name }} </h4>
  <p><strong>Descripción:</strong> {{ $product->description }} </p>
  <strong>Precio:</strong> {{ $product->price }}
  <br>
  <a href="{{ route('products.edit', [$product]) }}">Editar Producto</a>

  <form action="{{ route('products.destroy', [$product] ) }}" method="POST">
    @csrf

    @method('delete')
    
    <input type="submit" value="Eliminar Producto">

  </form>

@endsection
```

## Página Editar Producto

Archivo `resources\view\productos\edit.blade.php`

```php{10-40}
@extends('layout')

@section('title')
    Editar Producto
@endsection

@section('content')
  <h1>Editar Producto</h1>  

  <a href="{{ route('products.index') }}">Todos los Productos</a>

  <form action="{{ route('products.update', [$product]) }}" method="POST">
    @csrf

    @method('PUT')

    <label for="name">Nombre</label>
    <input type="text" name="name" id="name" value="{{ old('name', $product->name) }}">

    @error('name')
      <div class="alert alert-danger">{{ $message }}</div>
    @enderror

    <label for="description">Descripción</label>
    <input type="text" name="description" id="description" value="{{ old('description', $product->description) }}">

    @error('description')
      <div class="alert alert-danger">{{ $message }}</div>
    @enderror

    <label for="price">Precio</label>
    <input type="number" name="price" id="price" value="{{ old('price', $product->price) }}">

    @error('price')
      <div class="alert alert-danger">{{ $message }}</div>
    @enderror

    <input type="submit" value="Actualizar Producto">

  </form>

@endsection
 ```