---
pageClass: no-toc
---

# Configuración

# Introducción

Todos los archivos de configuración del framework Laravel se almacenan en el directorio `config`. Cada opción está documentada, así que siéntase libre de revisar los archivos y familiarizarse con las opciones disponibles.


## Configuración del entorno

A menudo es útil tener valores de configuración diferentes según el entorno en el que se ejecuta la aplicación. Por ejemplo, puede tener una configuración para su base de datos localmente y otra configuración diferente en su servidor de producción.

Para que esto sea fácil, Laravel utiliza la biblioteca PHP [DotEnv](https://github.com/vlucas/phpdotenv) de Vance Lucas. cuando instala Laravel con Composer, se crea un archivo llamado `.env` donde se guardarán las configuraciones, las cuales se aplican solamente a su entorno (su computadora).

Ejemplo del archivo `.env`

``` js
APP_NAME="Muejeres en las TIC"
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://laravel-mujeres-tic.test

LOG_CHANNEL=stack

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=mujeres_en_las_tic
DB_USERNAME=root
DB_PASSWORD=

BROADCAST_DRIVER=log
CACHE_DRIVER=file
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=null
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
```