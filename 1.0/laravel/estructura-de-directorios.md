# Estructura de directorios

[[toc]]
 
- [Estructura de directorios](#estructura-de-directorios)
  - [Introducción](#introducción)
      - [¿Dónde está el directorio de modelos?](#dónde-está-el-directorio-de-modelos)
  - [El directorio raíz](#el-directorio-raíz)
      - [El directorio `App`](#el-directorio-app)
      - [El directorio `Bootstrap`](#el-directorio-bootstrap)
      - [El directorio de configuración `Config`](#el-directorio-de-configuración-config)
      - [El directorio de la base de datos `database`](#el-directorio-de-la-base-de-datos-database)
      - [El directorio público `public`](#el-directorio-público-public)
      - [El directorio de recursos `resources`](#el-directorio-de-recursos-resources)
      - [El directorio de rutas `routes`](#el-directorio-de-rutas-routes)
      - [El directorio de almacenamiento `storage`](#el-directorio-de-almacenamiento-storage)
      - [El directorio de pruebas `tests`](#el-directorio-de-pruebas-tests)
      - [El directorio de paquetes `vendor`](#el-directorio-de-paquetes-vendor)
  - [El directorio de aplicación `App`](#el-directorio-de-aplicación-app)
      - [El Directorio de Radiodifusión `Broadcasting`](#el-directorio-de-radiodifusión-broadcasting)
      - [El directorio de la consola `Console`](#el-directorio-de-la-consola-console)
      - [El directorio de eventos `Event`](#el-directorio-de-eventos-event)
      - [El directorio de excepciones `Exceptions`](#el-directorio-de-excepciones-exceptions)
      - [El directorio `Http`](#el-directorio-http)
      - [El directorio de trabajos `Jobs`](#el-directorio-de-trabajos-jobs)
      - [El directorio de oyentes `Listeners`](#el-directorio-de-oyentes-listeners)
      - [El directorio de correo `Mail`](#el-directorio-de-correo-mail)
      - [El directorio de notificaciones `Notifications`](#el-directorio-de-notificaciones-notifications)
      - [El directorio de políticas `Policy`](#el-directorio-de-políticas-policy)
      - [El Directorio de Proveedores `Providers`](#el-directorio-de-proveedores-providers)
      - [El directorio de reglas `Rules`](#el-directorio-de-reglas-rules)

<!-- <a name="introducción"> </a> -->
## Introducción

La estructura de aplicación predeterminada de Laravel está destinada a proporcionar un excelente punto de partida para aplicaciones grandes y pequeñas. Pero puede organizar su aplicación como quiera. Laravel casi no impone restricciones sobre la ubicación de una clase determinada, siempre que `Composer` pueda cargar automáticamente la clase.

#### ¿Dónde está el directorio de modelos?

Al comenzar con Laravel, muchos desarrolladores están confundidos por la falta de un directorio `models`. Sin embargo, la falta de dicho directorio es intencional. La palabra "modelos" nos parece ambigua, ya que significa muchas cosas diferentes para muchas personas diferentes. Algunos desarrolladores se refieren al "modelo" de una aplicación como la totalidad de toda su lógica de negocios, mientras que otros se refieren a los "modelos" como clases que interactúan con una base de datos relacional.

Por esta razón, elegimos colocar los modelos Eloquent en el directorio `app` de forma predeterminada, y permitimos que el desarrollador los coloque en otro lugar si así lo desean.

<!-- <a name="el-directorio-raíz"> </a> -->
## El directorio raíz

<!-- <a name="the-root-app-directory"> </a> -->
#### El directorio `App`

El directorio `app` contiene el código central de su aplicación. casi todas las clases en su aplicación estarán en este directorio.

<!-- <a name="the-bootstrap-directory"> </a> -->
#### El directorio `Bootstrap`

El directorio `bootstrap` contiene el archivo `app.php` que inicia el Framework. Este directorio también contiene un directorio `caché` que contiene archivos generados por el Framework para la optimización del rendimiento, como las rutas y los archivos de caché.

<!-- <a name="el-directorio-de-configuración-config"> </a> -->
#### El directorio de configuración `Config`

El directorio `config`, como su nombre lo indica, contiene todos los archivos de configuración de su aplicación. Es una buena idea leer todos estos archivos y familiarizarse con todas las opciones disponibles.

<!-- <a name="the-database-directory"> </a> -->
#### El directorio de la base de datos `database`

El directorio `database` contiene las migraciones de su base de datos, fábricas modelo `factory ` y semillas. Si lo desea, también puede usar este directorio para contener una base de datos SQLite.

<!-- <a name="the-public-directory"> </a> -->
#### El directorio público `public`

El directorio `public` contiene el archivo `index.php`, que es el punto de entrada para todas las solicitudes que ingresan a su aplicación y configura la carga automática. Este directorio también alberga sus recursos, como imágenes, javaScript y CSS.

<!-- <a name="the-resources-directory"> </a> -->
#### El directorio de recursos `resources`

El directorio `resources` contiene sus vistas, así como sus activos sin compilar, como LESS, SASS o JavaScript. Este directorio también alberga todos sus archivos de idioma.

<!-- <a name="the-routes-directory"> </a> -->
#### El directorio de rutas `routes`

El directorio `routes` contiene todas las definiciones de ruta para su aplicación. De forma predeterminada, se incluyen varios archivos de ruta con Laravel: `web.php`,` api.php`, `console.php` y `channel.php`.

El archivo `web.php` contiene rutas que el `RouteServiceProvider` coloca en el grupo de middleware `web`, que proporciona estado de sesión, protección CSRF y cifrado de cookies. Si su aplicación no ofrece una API RESTful sin estado, todas sus rutas probablemente se definirán en el archivo `web.php`.

El archivo `api.php` contiene rutas que el `RouteServiceProvider` coloca en el grupo de middleware `api`, que proporciona limitación de velocidad. Se pretende que estas rutas no tengan estado, por lo que las solicitudes que ingresan a la aplicación a través de estas rutas deben autenticarse mediante tokens y no tendrán acceso al estado de la sesión.

El archivo `console.php` es donde puede definir todos sus comandos de consola basados ​​en Closure. Cada cierre está vinculado a una instancia de comando que permite un enfoque simple para interactuar con los métodos IO de cada comando. Aunque este archivo no define rutas HTTP, define puntos de entrada (rutas) basados ​​en la consola en su aplicación.

El archivo `channel.php` es donde puede registrar todos los canales de transmisión de eventos que admite su aplicación.

<!-- <a name="the-storage-directory"> </a> -->
#### El directorio de almacenamiento `storage`

El directorio `storage` contiene sus plantillas Blade compiladas, sesiones basadas en archivos, cachés de archivos y otros archivos generados por el Framework. Este directorio está segregado en directorios `app`, `framework` y `logs`. El directorio `app` puede usarse para almacenar cualquier archivo generado por su aplicación. El directorio `framework` se usa para almacenar archivos y cachés generados por el framework. Finalmente, el directorio `logs` contiene los archivos de registros de su aplicación.

El directorio `storage/app/public` puede usarse para almacenar archivos generados por el usuario, como avatares de perfil, que deberían ser accesibles públicamente. Debe crear un enlace simbólico en `public/storage` que apunte a este directorio. Puede crear el enlace usando el comando `php artisan storage:link`.

<!-- <a name="the-tests-directory"> </a> -->
#### El directorio de pruebas `tests`

El directorio `tests` contiene sus pruebas automatizadas. Se proporciona un ejemplo de prueba [PHPUnit](https://phpunit.de/). Cada clase de prueba debe tener el sufijo con la palabra `Test`. Puede ejecutar sus pruebas utilizando los comandos `phpunit` o `php vendor/bin/phpunit`.

<!-- <a name="the-vendor-directory"> </a> -->
#### El directorio de paquetes `vendor`

El directorio `vendor` contiene sus dependencias [Composer](https://getcomposer.org).

<!-- <a name="the-app-directory"> </a> -->
## El directorio de aplicación `App`

La mayoría de su aplicación está alojada en el directorio `app`. De forma predeterminada, este directorio tiene un espacio de nombres en `App` y Composer lo carga automáticamente usando el [estándar de carga automática PSR-4](https://www.php-fig.org/psr/psr-4/).

El directorio `app` contiene una variedad de directorios adicionales como `Console`, `Http` y `Providers`. Piense en los directorios `Console` y `Http` como proporcionando una API en el núcleo de su aplicación. El protocolo HTTP y la CLI son mecanismos para interactuar con su aplicación, pero en realidad no contienen la lógica de la aplicación. En otras palabras, son dos formas de emitir comandos a su aplicación. El directorio `Console` contiene todos sus comandos de Artisan, mientras que el directorio `Http` contiene sus controladores, middleware y solicitudes.

Se generará una variedad de otros directorios dentro del directorio `app` a medida que use los comandos `make` de Artisan para generar clases. Entonces, por ejemplo, el directorio `app/Jobs` no existe hasta que ejecute el comando `php artisan make:job` para generar una clase de trabajo `job`.

> Muchas de las clases en el directorio `app` pueden ser generadas por Artisan a través de comandos. Para revisar los comandos disponibles, ejecute el comando `php artisan list make` en su terminal.

<!-- <a name="the-broadcasting-directory"> </a> -->
#### El Directorio de Radiodifusión `Broadcasting`

El directorio `Broadcasting` contiene todas las clases de canales de difusión para su aplicación. Estas clases se generan usando el comando `make:channel`. Este directorio no existe de manera predeterminada, pero se creará para usted cuando cree su primer canal. Para obtener más información sobre los canales, consulte la documentación en [transmisión de eventos](https://laravel.com/docs/7.x/broadcasting).

<!-- <a name="the-console-directory"> </a> -->
#### El directorio de la consola `Console`

El directorio `Console` contiene todos los comandos personalizados de Artisan para su aplicación. Estos comandos pueden generarse usando el comando `make: command`. Este directorio también alberga su núcleo de consola, que es donde se registran sus comandos personalizados de Artisan y se definen sus [tareas programadas](https://laravel.com/docs/7.x/scheduling).

<!-- <a name="the-events-directory"> </a> -->
#### El directorio de eventos `Event`

Este directorio no existe por defecto, pero será creado para usted por los comandos artesanales `event:generate` y `make: event`. El directorio `Events` alberga clases de eventos. Los eventos se pueden usar para notificarle a otras partes de su aplicación que se ha producido una acción determinada, proporcionando una gran flexibilidad y desacoplamiento.

<!-- <a name="the-exceptions-directory"> </a> -->
#### El directorio de excepciones `Exceptions`

El directorio `Exceptions` contiene el controlador de excepciones de su aplicación y también es un buen lugar para colocar cualquier excepción lanzada por su aplicación. Si desea personalizar cómo se registran o representan sus excepciones, debe modificar la clase `Handler` en este directorio.

<!-- <a name="the-http-directory"> </a> -->
#### El directorio `Http`

El directorio `Http` contiene sus controladores, middleware y solicitudes de formularios. Casi toda la lógica para manejar las solicitudes que ingresan a su aplicación se colocará en este directorio.

<!-- <a name="the-jobs-directory"> </a> -->
#### El directorio de trabajos `Jobs`

Este directorio no existe por defecto, pero se creará para usted si ejecuta el comando `php artisan make: job`. El directorio `Jobs` contiene los queues (colas de trabajos* de su aplicación. Su aplicación puede poner en cola los trabajos o ejecutarlos sincrónicamente dentro del ciclo de vida de la solicitud actual. Los trabajos que se ejecutan sincrónicamente durante la solicitud actual a veces se denominan "comandos", ya que son una implementación del [patrón de comando](https://en.wikipedia.org/wiki/Command_pattern).

<!-- <a name="the-listeners-directory"> </a> -->
#### El directorio de oyentes `Listeners`

Este directorio no existe por defecto, pero se creará para usted si ejecuta los comandos artesanales `event: generate` o` make: listener`. El directorio `Listeners` contiene las clases que manejan sus [eventos](https://laravel.com/docs/7.x/events). Los oyentes de eventos reciben una instancia de evento y realizan la lógica en respuesta al evento que se dispara. Por ejemplo, un evento `UserRegistered` podría ser manejado por un oyente `SendWelcomeEmail`.

<!-- <a name="the-mail-directory"> </a> -->
#### El directorio de correo `Mail`

Este directorio no existe por defecto, pero se creará para usted si ejecuta el comando `php artisan make:mail`. El directorio `Mail` contiene todas sus clases que representan los correos electrónicos enviados por su aplicación. Los objetos de correo le permiten encapsular toda la lógica de construir un correo electrónico en una sola clase simple que puede enviarse utilizando el método `Mail::send`.

<!-- <a name="the-notifications-directory"> </a> -->
#### El directorio de notificaciones `Notifications`

Este directorio no existe por defecto, pero se creará para usted si ejecuta el comando `php artisan make: notify`. El directorio `Notificaciones` contiene todas las notificaciones" transaccionales "que envía su aplicación, como notificaciones simples sobre eventos que ocurren dentro de su aplicación. La notificación de Laravel presenta resúmenes que envían notificaciones a través de una variedad de controladores como correo electrónico, Slack, SMS o almacenados en una base de datos.

<!-- <a name="the-policies-directory"> </a> -->
#### El directorio de políticas `Policy`

Este directorio no existe de manera predeterminada, pero se creará para usted si ejecuta el comando `php artisan make: policy`. El directorio `Políticas` contiene las clases de políticas de autorización para su aplicación. Las políticas se utilizan para determinar si un usuario puede realizar una acción determinada contra un recurso. Para obtener más información, consulte la [documentación de autorización](https://laravel.com/docs/7.x/authorization).

<!-- <a name="the-providers-directory"> </a> -->
#### El Directorio de Proveedores `Providers`

El directorio `Providers` contiene todos los proveedores de servicios para su aplicación. Los proveedores de servicios arrancan su aplicación vinculando servicios en el contenedor de servicios, registrando eventos o realizando cualquier otra tarea para preparar su aplicación para las solicitudes entrantes.

En una aplicación nueva de Laravel, este directorio ya contendrá varios proveedores. Puede agregar sus propios proveedores a este directorio según sea necesario.

<!-- <a name="the-rules-directory"> </a> -->
#### El directorio de reglas `Rules`

Este directorio no existe por defecto, pero se creará para usted si ejecuta el comando `php artisan make: rule`. El directorio `Rules` contiene los objetos de regla de validación personalizados para su aplicación. Las reglas se utilizan para encapsular una lógica de validación complicada en un objeto simple. Para obtener más información, consulte la [documentación de validación](https://laravel.com/docs/7.x/validation).