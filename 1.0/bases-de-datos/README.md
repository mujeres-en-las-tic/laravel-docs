---
pageClass: no-toc
---

# Migraciones

Las migraciones controlan la creación, edición y eliminación de tablas en la base de datos, se guardan y se ejecutan de manera cronológica.

Ubicación: `/database/migrations/`

```
// Sintaxis de un archivo: esta compuesto por la fecha de creación y un nombre

2018_06_26_201149_create_sessions_table.php
2018_06_26_204354_create_posts_table.php
```

#### Comando para creación una migración:

```bash
php artisan make:migrate [descripcion_de_migracion]
```

#### Comando para ejecutar migraciones

```bash
php artisan migrate
```

####  Comando para eliminar migraciones

```bash
php artisan migrate:rollback
```

#### Comando para ver el estado de las migraciones

```bash
php artisan migrate:status
```
