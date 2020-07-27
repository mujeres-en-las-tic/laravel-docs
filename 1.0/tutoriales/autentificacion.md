# Autentificacion

Laravel simplifica la implementación de la autenticación. De hecho, casi todo está configurado para usted de forma inmediata. El archivo de configuración de autenticación se encuentra en , que contiene varias opciones bien documentadas para ajustar el comportamiento de los servicios de autenticación.config/auth.php


## Enrutamiento

El paquete de Laravel proporciona una forma rápida de andamiaje de todas las rutas y vistas que necesita para la autenticación con unos simples comandos: `laravel/ui`

``` bash
composer require laravel/ui

php artisan ui vue --auth
```