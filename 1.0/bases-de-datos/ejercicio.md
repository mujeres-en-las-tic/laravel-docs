---
pageClass: no-toc
---

# Ejercicio paso #6

Agregaremos las columnas a la migración de los productos `products`

Archivo `database\migrations\fecha + create_products_table.php`

```php{18-21}
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->double('price');
            $table->string('description')->nullable(); 
            // nullable() Indica que puede contener valores nulos
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
```

## Ejecutar las migraciones

Nuestro archivo de migración de productos esta listo, ahora debemos enviarlo a la base de datos.

```bash
php artisan migrate
```