---
pageClass: no-toc
---

# Ejercicio paso #2

Para nuestro ejercicio, escribiremos las siguientes rutas

Archivo de rutas `routes\web.php`

```php

// Página Inicio
Route::get('/', function () {

    // variable, que contiene un texto
    $programa = 'Mujeres en las TIC 2020..';

    // Retornar una vista con datos
    return view('index')->with('programa', $programa );

})->name('inicio');

// Página Nosotros
Route::get('/nosotros', function () {
    // Retornar una vista
    return view('nosotros');
})->name('nosotros');

/* 
* Resource Controller
* El nombre en plural y el nombre del controlador en singular,
* unido con la palabra controller
*/
Route::resource('products', 'ProductController');


// Página Contacto
Route::get('/contacto', function(){
    // Retornar una vista
    return view('contacto');
})->name('contacto');

```

:::tip Tip

Puedes ver las rutas definidas en este archivo en tu navegador web

Ejemplo: `http://mi-app.test/nosotros`

`http://mi-app.test/` es el dominio que se configura en su computadora, asi que revise ¿Cúal es su dominio del proyecto Laravel?


:::