---
pageClass: no-toc
---

# Enviar Correos

Con Laravel podemos enviar correos electrónicos de la siguiente forma

`Markdown` proporciona componentes, tablas, enlace de correo electrónico, botón, imagen incrustada, etc. un hermoso diseño Markdown que puede usar como plantilla de correo electrónico.

Veremos cómo enviar un correo electrónico simple con la configuración `smtp`  usando la clase `mailable` de Laravel 7. Es muy simple y la mejor manera. solo tiene que seguir unos pocos pasos.


1. Configuración 
    Archivo `.env`

    Debe agregar la configuración de envío de correo:

   * El servidor de correo electrónico
   * El puerto de correo electrónico, 
   * El nombre de usuario y la contraseña de correo electrónico.

    Laravel 7 utilizará los detalles del remitente en el correo electrónico. Así que simplemente puede agregar:

    ```env
    MAIL_DRIVER=smtp
    MAIL_HOST=smtp.gmail.com
    MAIL_PORT=587
    MAIL_USERNAME=yourgoogle@gmail.com
    MAIL_PASSWORD=rrnnucvnqlbsl
    MAIL_ENCRYPTION=tls
    ```

2. Crear la clase que se pueda enviar con Markdown

   ```bash
   php artisan make:mail MyTestMail --markdown=emails.myTestMail
   ```

   Ahora puede ver un nuevo archivo en la carpeta de su aplicación `app/Mail/MyTestMail.php`. Abra ese archivo y agregue el siguiente código.

   ```php{14,21,23,34-35}
    <?php

    namespace App\Mail;

    use Illuminate\Bus\Queueable;
    use Illuminate\Contracts\Queue\ShouldQueue;
    use Illuminate\Mail\Mailable;
    use Illuminate\Queue\SerializesModels;

    class MyTestMail extends Mailable
    {
        use Queueable, SerializesModels;

        public $details;

        /**
        * Create a new message instance.
        *
        * @return void
        */
        public function __construct($details)
        {
            $this->details = $details;
        }

        /**
        * Build the message.
        *
        * @return $this
        */
        public function build()
        {
            return $this->markdown('emails.myTestMail')
                ->from('contacto@miempresa.com')
                ->with('details', $this->details);
        }
    }
    ```

3. Crear Route

    Editamos el archivo de rutas web `routes\web.php`

   ```php
   Route::get('send-email','ContactController@myTestMail');
   ```
4.  Crear el Controlador y Método

    ```bash
    php artisan make:controller ContactController    
    ```

    Ahora, agregaremos myTestMail() en el archivo del controlador "ContactController", en este archivo escribiremos el código de envío del correo.


    ```php{6-7,11-37} 
    <?php

    namespace App\Http\Controllers;

    use Illuminate\Http\Request;
    use App\Mail\MyTestMail;
    use Illuminate\Support\Facades\Mail;

    class ContactController extends Controller
    {
        /**
        * Show the application dashboard.
        *
        * @return \Illuminate\Contracts\Support\Renderable
        */
        public function myTestMail()
        {
            // Este es el correo a donde llegara el mensaje
            $myEmail = 'your_receiver_email@gmail.com';

            // Estos datos los podemos utilizar en la vista
            $details = [
                'title' => 'Correo de prueba desde Laravel-doc.netlify.app',
                'url' => 'https://laravel-doc.netlify.app/1.0/laravel/'
            ];

            // Clase mail la cual envía el correo
            Mail::to($myEmail)->send(new MyTestMail($details));

            /* 
            Una vez enviado el correo, regresamos a la pagina inicio
            con un mensaje
            */
            return redirect('/')->with('status', 'Correo enviado');

            // Mostrar una vista previa del correo, en el navegador
            // return new \App\Mail\MyTestMail($details);
        }
    }
    ```