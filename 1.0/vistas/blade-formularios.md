---
pageClass: no-toc
---

## Formularios

<a name="csrf-field"> </a>
### Campo CSRF

Cada vez que defina un formulario HTML en su aplicación, debe incluir un campo de token CSRF oculto en el formulario para que el middleware [la protección CSRF](https://laravel.com/docs/7.x/csrf) pueda validar la solicitud. Puede usar la directiva Blade `@csrf` para generar el campo de token:

```php
<form method="POST" action="/profile">
    @csrf

    ...
</form>
```

<a name="method-field"> </a>
### Campo de método

Dado que los formularios HTML no pueden realizar solicitudes `PUT`,` PATCH` o `DELETE`, deberá agregar un campo oculto `_method` para suplantar estos verbos HTTP. La directiva Blade `@method`  puede crear este campo:

```php
    <form action="/foo/bar" method="POST">
        @method('PUT')

        ...
    </form>
```

<a name="validation-errors"> </a>
### Errores de validación

La directiva `@error` se puede usar para verificar rápidamente si existen [mensajes de error de validación](https://laravel.com/docs/7.x/validation) para un atributo dado. Dentro de una directiva `@error`, puede hacer eco de la variable `$message` para mostrar el mensaje de error:


```php
    <!-- /resources/views/post/create.blade.php -->

    <label for="title"> Título de la publicación </label>

    <input id="title" type="text" class="@error('title') no es válido @enderror">

    @error('título')
        <div class = "alert alert-danger"> {{ $mensaje }} </div>
    @enderror
```

