---
pageClass: no-toc
---

# Resource Controller

El enrutamiento de recursos de Laravel asigna las rutas típicas "CRUD" a un controlador con una sola línea de código. Por ejemplo, es posible que desee crear un controlador que maneje todas las solicitudes HTTP de "fotos" almacenadas por su aplicación. Usando el comando artesanal `make: controller`, podemos crear rápidamente dicho controlador:

```bash
php artisan make:controller PhotoController --resource
```

Este comando generará un controlador en `app/Http/Controllers/PhotoController.php`. El controlador contendrá un método para cada una de las operaciones de recursos disponibles.

A continuación, puede registrar una ruta ingeniosa (resourceful) para el controlador:

```php
Route::resource('photos', 'PhotoController');
```

Esta declaración de ruta única crea múltiples rutas para manejar una variedad de acciones en el recurso. El controlador generado ya tendrá métodos definidos para cada una de estas acciones, incluidas notas que le informan sobre los verbos HTTP y los URI que manejan.

Puede registrar muchos controladores de recursos a la vez pasando una matriz al método `resources`:

```php
Route::resource([
    'photos' => 'PhotoController',
    'posts' => 'PostController',
]);
```

#### Acciones manejadas por el controlador de recursos

Verb      | URI                  | Action       | Route Name
----------|-----------------------|--------------|---------------------
GET       | `/photos`              | index        | photos.index
GET       | `/photos/create`       | create       | photos.create
POST      | `/photos`              | store        | photos.store
GET       | `/photos/{photo}`      | show         | photos.show
GET       | `/photos/{photo}/edit` | edit         | photos.edit
PUT/PATCH | `/photos/{photo}`      | update       | photos.update
DELETE    | `/photos/{photo}`      | destroy      | photos.destroy

#### Especificando el modelo del recurso

Si está utilizando la vinculación del modelo de ruta **(model binding)** y desea que los métodos del controlador de recursos *(resource controller's methods)* para vincular una instancia de **modelo**, puede usar la opción `--model` al generar el controlador:

```bash
php artisan make:controller PhotoController --resource --model=Photo
```

#### Métodos de formulario de suplantación de identidad

Dado que los formularios HTML no pueden realizar solicitudes `PUT`, `PATCH` o `DELETE`, deberá agregar un campo oculto` _method` para suplantar estos verbos HTTP. La directiva Blade `@method` puede crear este:

```php
<form action="/foo/bar" method="POST">
    @method('PUT')
</form>
```

<a name="restful-partial-resource-routes"> </a>
### Rutas de recursos parciales

Al declarar una ruta de recursos, puede especificar un subconjunto de acciones que el controlador debe manejar en lugar del conjunto completo de acciones predeterminadas:

```php
Route::resource('fotos', 'PhotoController')->only([
    'index', 'show'
]);
```

```php
Route::resource('fotos', 'PhotoController')->except([
    'create', 'store', 'update', 'destroy'
]);
``` 