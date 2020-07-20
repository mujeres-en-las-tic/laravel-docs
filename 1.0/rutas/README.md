# Rutas

[[toc]]

Las rutas en Laravel representan las URL internas de su aplicación web.

Supongamos que su aplicación Laravel tiene el dominio `http://tu-app.test`

- `http://tu-app.test/` Representa la página principal
- `http://tu-app.test/nosotros` Representa la página `nosotros`
- `http://tu-app.test/contacto` Representa la página `contacto`

<a name="basic-routing"></a>
## Enrutamiento Básico

Las rutas más básicas de Laravel aceptan un URI y un `Closure`, proporcionando un método muy simple y expresivo para definir rutas

``` php
Route::get('nosotros', function() {
    return 'Página Nosotros';
});
```

#### Los archivos de ruta predeterminados

Todas las rutas de Laravel se definen en sus archivos de ruta, que se encuentran en el directorio `routes`. Estos archivos son cargados automáticamente por el Framework. El archivo `routes/web.php` define las rutas para su interfaz web. A estas rutas se les asigna el grupo de middleware `web`, que proporciona características como el estado de la sesión y la protección CSRF. Las rutas en `routes/api.php` no tienen estado y se les asigna el grupo de middleware `api`.

Para la mayoría de las aplicaciones, comenzará definiendo rutas en su archivo `routes/web.php`. Se puede acceder a las rutas definidas en `routes/web.php` ingresando la URL de la ruta definida en su navegador. Por ejemplo, puede acceder a la siguiente ruta navegando a `http://tu-app.test/` en su navegador:

``` php
Route::get('/user', 'UserController@index');
```

Las rutas definidas en el archivo `routes/api.php` están anidadas dentro de un grupo de rutas por el `RouteServiceProvider`. Dentro de este grupo, el prefijo URI `/api` se aplica automáticamente, por lo que no es necesario aplicarlo manualmente a todas las rutas del archivo. Puede modificar el prefijo y otras opciones de grupo de ruta modificando su clase `RouteServiceProvider`.

#### Métodos de Rutas disponibles

Route le permite registrar rutas que responden a cualquier [Métodos de petición HTTP](https://developer.mozilla.org/es/docs/Web/HTTP/Methods):

``` php
Route::get($uri, acción);
Route::post($uri, acción);
Route::put($uri, acción);
Route::patch($uri, acción);
Route::delete($uri, acción); 
Route::options($uri, acción);
```

A veces puede que necesite registrar una ruta que responda a múltiples verbos HTTP. Puede hacerlo utilizando el método `match`. O incluso puede registrar una ruta que responda a todos los verbos HTTP utilizando el método `any`:


``` php
Route::match(['get', 'post'], '/', function() {
    //
});

Route::any('/', function() {
    //
}); 
```
#### Protección CSRF

Cualquier formulario HTML que apunte a las rutas `POST`,` PUT`, `PATCH` o `DELETE` que se definen en el archivo de rutas `web` debe incluir un campo de token CSRF. De lo contrario, la solicitud será rechazada. Puede leer más sobre la protección de CSRF en la [documentación de CSRF](https://laravel.com/docs/7.x/csrf):

``` php
<form method="POST" action="/profile">
    @csrf
    ...
</form>
```
### Route View

Si su ruta solo necesita devolver una vista, puede usar el método `Route::view`. Al igual que el método `redirect`, este método proporciona un acceso directo simple para que no tenga que definir una ruta o controlador completo. El método `view` acepta un URI como su primer argumento y un nombre de vista como su segundo argumento. Además, puede proporcionar una matriz de datos para pasar a la vista como un tercer argumento opcional:

``` php
Route::view('/nosotros', 'nosotros');

Route::view('/contacto', 'contacto', ['correo' => 'nombre@empresa.com']);
``` 

## Parámetros de ruta

### Parámetros requeridos

Algunas veces necesitará capturar segmentos del URI dentro de su ruta. Por ejemplo, es posible que deba capturar la identificación de un usuario de la URL. Puede hacerlo definiendo parámetros de ruta:

``` php
Route::get('user/{id}', function ($id) {
    return 'user'. $id;
});
```

Puede definir tantos parámetros de ruta como requiera su ruta:

``` php
Route::get('posts/{post}/comments/{comment}', function ($postId, $commentId) {
    //
});
```

Los parámetros de ruta siempre están encerrados entre llaves `{}` y deben consistir en caracteres alfabéticos, y no pueden contener un carácter `-`. En lugar de usar el carácter `-`, use un guión bajo (`_`)

## Rutas con nombre

Las rutas con nombre permiten la generación conveniente de URL o redireccionamientos para rutas específicas. Puede especificar un nombre para una ruta encadenando el método `name` en la definición de ruta:

``` php
Route::get('user/profile', function() {
    //
})->name('profile');
```

También puede especificar nombres de ruta para acciones de controlador:

``` php
Route::get('user/profile', 'UserProfileController@show')->name('profile');
```

> {nota} Los nombres de ruta siempre deben ser únicos.

#### Generando URLs a rutas con nombre

Una vez que haya asignado un nombre a una ruta determinada, puede usar el nombre de la ruta al generar URL o redireccionamientos a través de la función global `route`:

``` php
    // Generando URLs ...
    $url = route('profile');

    // Generando redireccionamientos ...
    return redirect()->route('profile');
```

Si la ruta con nombre define parámetros, puede pasar los parámetros como el segundo argumento a la función `route`. Los parámetros dados se insertarán automáticamente en la URL en las posiciones correctas:

``` php
Route::get('user/{id}/profile', function($id) {
    //
})->name('profile');

$url = route ('profile', ['id' => 1]);
```

Si pasa parámetros adicionales en la matriz, esos pares clave/valor se agregarán automáticamente a la cadena de consulta de la URL generada:

``` php
Route::get('user/{id}/profile', function($id) {
    //
})->name('profile');

$url = route('profile', ['id' => 1, 'fotos' => 'yes']);

// /user/1/profile?photos=yes
```

:::tip TIP
A veces, es posible que desee especificar valores predeterminados de toda la solicitud para los parámetros de URL, como la configuración regional actual. Para lograr esto, puede usar el [método URL::defaults](https://laravel.com/docs/7.x/urls#default-values)
