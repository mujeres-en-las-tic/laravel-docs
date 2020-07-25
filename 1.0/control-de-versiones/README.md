---
pageClass: no-toc
---

# Clonar un proyecto desde github.com

1. Para clonar un proyecto debemos ir a [github](https://github.com), ingresar al repositorio que vamos a clonar, y dar clic en el botón verde que dice `code` 

    ![Botón verde llamado Code](/assets/img/clone-code.png)

    ``` bash
    git clone https://github.com/mujeres-en-las-tic/wetec
    ```
    > git = es el sistema de control de versiones

    > clone = copiar los archivos del proyecto en su computadora

    > https://github.com/mujeres-en-las-tic/wetec = la url https del proyecto

    ::: tip TIP
    Clonar, quiere decir que copiamos el repositorio git en una ubicación de nuestra computadora.
    :::

2. Una vez clone el proyecto se crea una carpeta, en este caso se llama `wetec`, para ingresar a la carpeta debe escribir:

    ``` bash
    cd wetec
    ```

3. Ahora debe instalar las dependencias del Framework Laravel, utilizando el manejador de paquetes de PHP llamado [Composer](https://getcomposer.org/)

    ``` bash
    composer install
    ```

4. Una instaladas las dependencias debe renombrar el archivo .env.example a .env
    
    ``` bash
    cp .env.example .env
    ```

    ::: tip
    El archivo .env es muy importante en Laravel, ya que guarda variables de configuración especificas de la instalación actual.
    :::

5. También debe generar una llave principal, para que Laravel pueda encriptar los datos que nosotros indiquemos y pueda utilizar la directiva [@csrf](https://laravel.com/docs/7.x/csrf)

    ``` bash
    php artisan key:generate
    ```

    ::: tip
    Ahora puede abrir en su navegador [http://wetec.test](http://wetec.test)
    :::