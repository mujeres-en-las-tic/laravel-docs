---
pageClass: no-toc
---

## Introduction 

En lugar de definir toda su lógica de manejo de solicitudes en `Closures` en los archivos de ruta `routes\web.php`, es posible que desee organizar este comportamiento utilizando clases de Controlador. Los controladores pueden **agrupar la lógica de manejo de solicitudes relacionadas** en una sola clase. Los controladores se almacenan en el directorio `app/Http/Controllers`.

<a name="defining-controllers"> </a>
### Definición de controladores

A continuación se muestra un ejemplo de una clase de controlador básico. Tenga en cuenta que el controlador extiende la clase de controlador base incluida con Laravel. La clase base proporciona algunos métodos convenientes, como el método `middleware`, que puede usarse para adjuntar middleware a las acciones del controlador:

```php

<? php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\User;

class UserController extends Controller
{
    / **
        * Mostrar el perfil del usuario.
        * 
        * @param int $id
        * @return View 
        * /
    public function show($id)
    {
        return view('user.profile', ['user' => User::findOrFail($id)]);
    }
}
```

Puede definir una ruta a esta acción del controlador de la siguiente manera:

```php
Route::get('user/{id}', 'UserController@show');
```

Ahora, cuando una solicitud coincide con el URI de ruta especificado, se ejecutará el método `show` en la clase `UserController`. Los parámetros de ruta también se pasarán al método.

:::tip TIP
Los controladores no están **obligados** a extender una clase base. Sin embargo, no tendrá acceso a funciones de conveniencia como los métodos 'middleware',  `validate`, and `dispatch`.
:::

<a name="controllers-and-namespaces"> </a>
### Controladores y espacios de nombres (Namespace)

Es muy importante tener en cuenta que no necesitamos especificar el espacio de nombres completo del controlador al definir la ruta del controlador. Dado que `RouteServiceProvider` carga sus archivos de ruta dentro de un grupo de ruta que contiene el espacio de nombres, solo especificamos la parte del nombre de clase que viene después de la parte `App\Http\Controllers` del espacio de nombres.

Si elige anidar sus controladores más profundamente en el directorio `App\Http\Controllers`, use el nombre de clase específico relativo al espacio de nombres raíz` App\Http\Controllers`. Entonces, si su clase de controlador completo es `App\Http\Controllers\Photos\AdminController`, debe registrar las rutas al controlador de la siguiente manera:

```php
Route::get('foo', 'Photos\AdminController@method');
```

## Ciclo Completo de Solicitudes(request) en Laravel 

Aquí se resalta con el circulo anaranjado la representación del Controlador (Controller).

![Laravel Controlador](/assets/img/laravel-controller.jpg)