---
pageClass: no-toc
---

# Laravel Eloquent

<a name="introduction"> </a>
## Introducción

El ORM Eloquent incluido con Laravel proporciona una implementación de ActiveRecord hermosa y simple para trabajar con su base de datos. Cada tabla de la base de datos tiene un "Modelo" correspondiente que se utiliza para interactuar con esa tabla. Los modelos le permiten consultar datos en sus tablas, así como insertar nuevos registros en la tabla.

Antes de comenzar, asegúrese de configurar una conexión de base de datos en `config/database.php`. Para obtener más información sobre cómo configurar su base de datos, consulte [la documentación](https://laravel.com/docs/7.x/database#configuration)).

<a name="defining-models"> </a>
## Definiendo modelos (Models)

Para comenzar, creemos un modelo Eloquent. Los modelos suelen estar en el directorio `app`, pero puede colocarlos en cualquier lugar que pueda cargarse automáticamente de acuerdo con su archivo `composer.json`. Todos los modelos Eloquent extienden la clase `Illuminate\Database\Eloquent\Model`.

La forma más fácil de crear una instancia de modelo es usar el comando `php artisan make:model` [comando Artisan](https://laravel.com/docs/7.x/artisan#introduction):

```bash
php artisan make:model Product
```

Si desea generar una [migración de base de datos](https://laravel.com/docs/7.x/migrations) cuando genera el modelo, puede usar la opción `--migration` o `-m`:

```bash
php artisan make:model Product --migration

php artisan make:model Product -m
```

<a name="eloquent-model-conventions"> </a>
### Convenciones modelo Eloquent

Ahora, veamos un ejemplo del modelo `Product`, que usaremos para recuperar y almacenar información de nuestra tabla de base de datos `product`:

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
}
```

<a name="retrieving-models"> </a>
## Recuperando modelos

Una vez que haya creado un modelo y su [tabla asociada en la base de datos](https://laravel.com/docs/7.x/migrations#introduction), estará listo para comenzar a recuperar datos de su base de datos. Piense en cada modelo Eloquent como un poderoso [generador de consultas](https://laravel.com/docs/7.x/queries) que le permite consultar con fluidez la tabla en la base de datos asociada con el modelo. Por ejemplo:

```php
<?php

$products = App\Product::all();

foreach ($products as $product) {
    echo $product->name;
}
```

#### Agregar restricciones adicionales

El método Eloquent `all` devolverá todos los resultados en la tabla del modelo. Dado que cada modelo Eloquent sirve como un [generador de consultas](https://laravel.com/docs/7.x/queries), también puede agregar restricciones a las consultas y luego usar el método `get` para recuperar los resultados:

```php
$products = App\Product::where('active', 1)
    ->orderBy('name', 'desc')
    ->take(10)
    ->get();
```

:::tip
Dado que los modelos Eloquent son constructores de consultas, debe revisar todos los métodos disponibles en el [generador de consultas](https://laravel.com/docs/7.x/queries). Puede usar cualquiera de estos métodos en sus consultas Eloquent.
:::
