---
pageClass: no-toc
---

# Ejercicio

## Plantilla base
Archivo `resources\view\layout.blade.php`

```php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sitio web básico @yield('title')</title>
</head>
<body>

    <nav>
        <ul>
            <li><a href="{{ route('inicio') }}">Inicio</a></li>
            <li><a href="{{ route('nosotros') }}">Nosotros</a></li>
            <li><a href="{{ route('products.index') }}">Productos</a></li>
            <li><a href="{{ route('contacto') }}">Contacto</a></li>
        </ul>    
    </nav>
    
    @yield('content')

    <footer>
        Mujeres en las TIC 2020
    </footer>

</body>
</html>

```

## Página Inicio

Archivo `resources\view\index.blade.php`

```php
@extends('layout')

@section('title', 'Inicio')

@section('content')
  <h1>Soy la página inicio</h1>  

<p>{{ $programa }}<p>

@endsection
```

## Página Sobre Nosotros

Archivo `resources\view\nosotros.blade.php`

```php
@extends('layout')

@section('title')
    Sobre Notros
@endsection

@section('content')
  <h1>Soy la página Nosotros</h1>  
@endsection
```

## Página Listado de Productos

Archivo `resources\view\productos\index.blade.php`

```php
@extends('layout')

@section('title')
    Productos
@endsection

@section('content')
  <h1>Listado de Productos</h1>  
@endsection
```

## Página Detalles de Producto

Archivo `resources\view\productos\show.blade.php`

```php
@extends('layout')

@section('title')
    Detalles de Producto
@endsection

@section('content')
  <h1>Detalles de Producto</h1>  
@endsection
```

## Página Editar de Producto

Archivo `resources\view\productos\edit.blade.php`

```php
@extends('layout')

@section('title')
    Editar Producto
@endsection

@section('content')
  <h1>Editar Producto</h1>  
@endsection
 ```

## Página Contáctenos

Archivo `resources\view\contacto.blade.php`

 ```php
@extends('layout')

@section('title')
    Contáctenos
@endsection

@section('content')
  <h1>Contáctenos</h1>  
@endsection
 ```