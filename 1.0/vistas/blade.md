---
pageClass: no-toc
---

# Blade
Blade es el motor de plantillas simple pero potente provisto con Laravel. A diferencia de otros motores de plantillas populares de PHP, Blade no le impide usar código PHP simple en sus vistas. De hecho, todas las vistas de Blade se compilan en código PHP simple y se almacenan en caché hasta que se modifican, lo que significa que Blade agrega esencialmente cero sobrecarga a su aplicación. **Los archivos de vista Blade** usan la extensión de archivo `.blade.php` y generalmente se almacenan en el directorio. `resources/views`

## Herencia de plantilla

<!-- <a name="defining-a-layout"> </a> -->
### Definiendo un plantilla base (Layout)

Dos de los principales beneficios de usar Blade son _herencia de plantillas_ y _secciones_. Para comenzar, echemos un vistazo a un ejemplo simple. Primero, examinaremos un diseño de página "master". Dado que la mayoría de las aplicaciones web mantienen el mismo diseño general en varias páginas, es conveniente definir este diseño como una sola vista Blade:

```php
<!-- Ubicado en resources /views/layouts/app.blade.php -->

<html>
    <head>
        <title> Sitio Web - @yield ('title') </title>
    </head>
    <body>
        @section('sidebar')
            Esta es la barra lateral maestra.
        @endsection

        <div class="container">
            @yield('content')
        </div>
    </body>
</html>
```

Como puede ver, este archivo contiene un marcado HTML típico. Sin embargo, tome nota de las directivas `@section` y `@yield`. La directiva `@section`, como su nombre lo indica, define una sección de contenido, mientras que la directiva `@yield` se usa para mostrar el contenido de una sección determinada.

Ahora que hemos definido una plantilla base para nuestra aplicación, definamos una página secundaria que herede el diseño.

<a name="extending-a-layout"> </a>
### Extender un diseño base (Layout)

Al definir una vista secundaria, use la directiva Blade `@extend` para especificar qué plantilla debe "heredar" la vista secundaria. Las vistas que extienden una  plantilla Blade pueden inyectar contenido en las secciones de la plantilla utilizando la directiva `@section`. Recuerde, como se ve en el ejemplo anterior, el contenido de estas secciones se mostrará en la plantilla usando `@yield`:

```php
<!-- Ubicado en resources/views/child.blade.php -->

@extends('layouts.app')

@section('título', 'Sobre Nosotros')

@section('sidebar')
    @parent

    <p>Esto se agrega a la barra lateral maestra. </p>
@endsection

@section('content')
    <p>Este es el contenido principal de la página Nosotros.</p>
@endsection
```

En este ejemplo, la sección `sidebar` está utilizando la directiva `@parent` para agregar (en lugar de sobrescribir) contenido a la barra lateral de la plantilla padre. La directiva `@parent` será reemplazada por el contenido de la plantilla padre cuando se visualice la vista.


Las vistas de Blade pueden ser devueltas desde rutas (Route) usando el helper global `view`:

```php
Route::get('nosotros', function () {
    return view('nosotros');
});
```

<a name="displaying-data"> </a>
## Mostrar datos

Puede mostrar los datos pasados ​​a sus vistas de Blade envolviendo la variable entre llaves. Por ejemplo, dada la siguiente ruta:

```php
Route::get('saludo', función () {
    return view('bienvenida', ['name' => 'Samantha']);
});
```

Puede mostrar el contenido de la variable `name` de la siguiente manera:

```php
Hola, {{ $name }}.
```

También puede hacer imprimir en pantalla los resultados de cualquier función PHP. De hecho, puede poner cualquier código PHP que desee dentro de una declaración de eco Blade:

```php
La marca de tiempo UNIX actual es {{ time() }}.
```

#### Visualización de datos sin escapes

Por defecto, las declaraciones Blade `{{}}` se envían automáticamente a través de la función `htmlspecialchars` de PHP para evitar ataques XSS. Si no desea que se escapen sus datos, puede usar la siguiente sintaxis:

```php
Hola, {!! $name !!}.
```

:::tip Nota
Tenga mucho cuidado al hacer eco del contenido que proporcionan los usuarios de su aplicación. Utilice siempre la sintaxis de doble corchete escapado `{{ }}` para evitar [ataques XSS](https://es.wikipedia.org/wiki/Cross-site_scripting) cuando muestre datos proporcionados por el usuario.
:::

## Estructuras de Control

Además de la herencia de plantillas y la visualización de datos, Blade también proporciona accesos directos convenientes para estructuras de control comunes de PHP , como declaraciones condicionales y bucles (ciclos). Estos atajos proporcionan una forma muy limpia y concisa de trabajar con estructuras de control de PHP, al tiempo que siguen siendo familiares para otros desarrolladores de PHP.

<a name="if-statements"></a>
### Declaración `If` 

Puede construir declaraciones `if` utilizando las directivas `@if`, `@elseif`, `@else` y `@endif`. Estas directivas funcionan de manera idéntica a sus contrapartes PHP:

```php
    @if(count($records) === 1)
        ¡Tengo un registro!
    @elseif (count($records) > 1)
       ¡Tengo multiples registros!
    @else
       No tengo registros
    @endif
```

Para mayor comodidad, Blade también proporciona una directiva `@unless`:

```php
@unless(Auth::check())
    No has iniciado sesión.
@endunless
```

Además de las directivas condicionales ya discutidas, las directivas `@ isset` y` @ empty` pueden usarse como accesos directos convenientes para sus respectivas funciones PHP:

```php
@isset($registros)
    // $records está definido y no es nulo ...
@endisset

@empty($registros)
    // $records está "vacío" ...
@endempty
```

### Bucles (Ciclos)

Además de las declaraciones condicionales, Blade proporciona directivas simples para trabajar con las estructuras de bucle de PHP. Nuevamente, cada una de estas directivas funciona de manera idéntica a sus contrapartes PHP:

```php
@for($i = 0; $i < 10; $ i++)
    El valor actual es {{ $i }}
@endfor

@foreach($users as $user)
    <p>Este es el usuario {{$ user->id }}</p>
@endforeach

@forelse($users as $user)
    <li> {{ $user->name }} </li>
@empty
    <p>Sin usuarios</p>
@endforelse

@while(true)
    <p> Estoy en bucle para siempre. </p>
@endwhile
```

Cuando use bucles, también puede finalizar el bucle u omitir la iteración actual:

```php
@foreach($users as $user)
    @if( $user->type == 1 )
        @continue
    @endif

    <li> {{ $user->name }} </li>

    @if( $user->number == 5 )
         @break
    @endif
@endforeach
```

También puede incluir la condición con la declaración de directiva en una línea:

```php
@foreach($users as $user)
    @continue($user->type == 1)

    <li> {{ $user->name }} </li>

    @break( $user->number == 5)
@endforeach
```

<a name="incincluyendo-subviews"> </a>
## Incluyendo sub vistas

La directiva `@include` de Blade le permite incluir una vista Blade desde otra vista. Todas las variables que están disponibles para la vista principal estarán disponibles para la vista incluida:

```php
<div>
    @include('shared.errors')

    <form>
        <!-- Contenido del formulario -->
    </form>
</div>
```