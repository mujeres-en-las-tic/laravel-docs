---
pageClass: no-toc
---

# Ejercicio paso #1

Crearemos el modelo `Product` para ver, crear, editar y eliminar productos desde nuestra base de datos.

Ejecutamos el siguiente comando en la terminal.

``` bash 
php artisan make:model Product -a 
```
> `-a` nos ayuda generando, la migración y el controlador.

::: tip
Recuerda que debes estar en la carpeta de tu proyecto Laravel, para poder utilizar el comando `php artisan`
:::

## Asignación masiva

La asignación masiva no ayuda a usar el método `create` para insertar un nuevo registro en la base de datos, y lo activaremos con: `protected $guarded = [];`

Archivo ubicado en: `App\Product.php`

```php{9-15}
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = [];
}
```