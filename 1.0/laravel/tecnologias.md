---
pageClass: no-toc
---

# Herramientas y Conceptos

## ¿QUE OTRAS TECNOLOGÍAS DEBO CONOCER COMENZAR A TRABAJAR CON LARAVEL?
Laravel esta compuesto de herramientas externas para  poder trabajar de una mejor manera y de forma integrada con este framework, por esto debemos conocer algunas de estas herramientas, conceptos y/o lenguajes para que a la hora de iniciar en Laravel podamos hacerlo de una manera agradable y que la curva de aprendizaje sea bastante rápida.

Aquí podemos enumerar algunos puntos que son importantes antes de empezar a trabajar con Laravel.

#### [Composer](https://getcomposer.org/)
Es una herramienta para la gestión de las dependencias en PHP. Nos permite declarar las bibliotecas  que necesitaremos en nuestros proyectos y de cuales libreras depende y Composer nos ayudara a (instalar / actualizar) de una manera sencilla y practica.

#### [Blade](https://laravel.com/docs/7.x/blade) 
Es un motor de plantillas, Blade es simple pero potente y esta integrado ya en Laravel. A diferencia de otros motores de plantillas de PHP, Blade no restringe el uso de código PHP normal en sus vistas. De hecho, todas las vistas se compilan en código PHP simple y son guardados hasta que sean modificadas con esto no generar lentitud en la carga de tu aplicación utilizando Blade. Los archivos de vista de Blade utilizan la extensión de archivo .blade.php y normalmente se almacenan en el directorio Resources/views.

#### [Artisan](https://laravel.com/docs/7.x/artisan)
Es la interfaz en línea de comandos (shell) que se incluye con Laravel. Proporciona una serie de comandos útiles que nos ayudaran  mientras se construye su aplicación. Por ejemplo cuando queremos crear una tabla en nuestra base de datos se realizar con migraciones de Laravel (algo que veremos más adelante) y esto funciona por la vía de Artisan desde consola.

#### Configuración de variables de entorno 
Algo muy bueno de Laravel son sus variables de entorno ya que es útil tener diferentes valores de configuración basados en el entorno de la aplicación o sea en donde ejecuta la misma. Por ejemplo, es posible que desee utilizar un controlador de caché diferente en ambiente de desarrollo que en el de producción. Para que esto simple laravel utiliza la biblioteca DotEnv PHP. En una instalación nueva laravel, el directorio raíz de la aplicación contendrá un archivo .env.example. Si instala a través de laravel composer, este archivo automáticamente se cambiará el nombre a .env. De lo contrario, se debe cambiar el nombre del archivo de forma manual.

#### [PHP namespaces](https://www.php.net/manual/es/language.namespaces.php)
Aunque cualquier código válido de PHP puede estar contenido dentro de un namespace, sólo los siguientes tipos de códigos se ven afectados por los espacios de nombres: clases, interfaces, funciones y constantes. Los namespaces se declaran usando la palabra clave namespace. Un archivo que contiene un namespace debe declarar el namespace en la parte superior del archivo antes de cualquier otro código – con una excepción: la palabra clave declare.

#### [Json](https://www.json.org/json-en.html) JavaScript Object Notation 
Es un formato ligero de intercambio de datos. Leerlo y escribirlo es simple para humanos, mientras que para las máquinas es simple interpretarlo y generarlo.

#### [Git](https://git-scm.com/)
Para una mejor explicación detallada sobre Git puedes verla [aquí](https://git-scm.com/book/es/v2), Git es importante para Laravel ya que mucho de los desarrollos de distintas librerías las encontraras en repositorios con esta tecnología así que es importante conocerla a fondo.