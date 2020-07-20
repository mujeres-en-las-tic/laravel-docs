---
pageClass: no-toc
---

# Vistas
Las vistas es lo que usted ve en pantalla cuando ingresa a un sitio web.

## Creando Vistas

Las vistas contienen el HTML servido por su aplicación y separan **su lógica de controlador/aplicación** de su **lógica de presentación**. Las vistas se almacenan en el directorio `resources/views`. Una vista simple podría verse así:

` Vista ubicada en resources/views/nosotros.blade.php `

```php
<html>
    <body>
        <h1>Hola, {{ $name }}</h1>
    </body>
</html>
```

Dado que esta vista se almacena en `resources/views/nosotros.blade.php`, podemos devolverla usando el `helper` global `view` de esta manera:


```php
Route::get('/', function () {
    return view('nosotros', ['name' => 'James']);
});
```

Como puede ver, el primer argumento pasado al helper `view` corresponde al nombre del archivo de vista en el directorio `resources/views`. El segundo argumento es una matriz de datos que deberían estar disponibles para la vista. En este caso, estamos pasando la variable `name`, que se muestra en la vista utilizando [Sintaxis de Blade](https://laravel.com/docs/7.x/blade).

Las vistas también pueden estar anidadas dentro de subdirectorios del directorio `resources/views`. La notación "punto" se puede utilizar para hacer referencia a vistas anidadas. Por ejemplo, si su vista se almacena en `resources/views/productos/index.blade.php`, puede hacer referencia a ella de la siguiente manera:

```php
return view('productos.index');
```

>Nota: los nombres de los directorios de vistas `Views` no deben contener el carácter `.`.

## Pasar datos a la vista

Puedes pasar una matriz de datos a las vistas:

```php
return view('nosotros', ['name' => 'Victoria']);
```

Al pasar información de esta manera, los datos deben ser una matriz con pares clave/valor. Dentro de su vista, puede acceder a cada valor utilizando su clave correspondiente, como `<?php echo $ key; ?> `. Como alternativa a pasar una matriz completa de datos a la función helper `view`, puede usar el método `with` para agregar datos individuales a la vista:

```php
return view('nosotros')->with('name', 'Victoria');
```

## Ciclo Completo de Solicitudes(request) en Laravel 

Aquí se resalta con el circulo anaranjado la representación de las vistas (View).

![Laravel Vistas](/assets/img/laravel-view.jpg)
