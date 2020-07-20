---
pageClass: no-toc
---

# Instalación de Laravel

Lo podemos hacer de dos formas.

Laravel utiliza Composer para gestionar sus dependencias. Entonces, antes de usar Laravel, asegúrese de tener Composer instalado en su máquina.[Composer](https://getcomposer.org/)

## Vía instalador de Laravel

```bash
composer global require laravel/installer
```

Composer instalará Laravel de forma global en su computadora. esto quiere decir que usted puede invocar el comando `laravel` en la linea de comandos, y de esta forma pueda realizar la instalación.

``` bash
laravel new blog
```

- `laravel` hace referencia al instalador de Laravel
- `new` indica que queremos una nueva instalación de Laravel
- `blog` el nombre de la carpeta donde se guardará la instalación

Una vez instalado, el comando `laravel new` creará una nueva instalación de Laravel en el directorio que usted especifique. Por ejemplo, `laravel new blog`  creará un directorio que contiene una nueva instalación de Laravel con todas las dependencias de Laravel ya instaladas en una carpeta llamada `blog`.

## Vía Composer Create-Project

``` bash 
composer create-project --prefer-dist laravel/laravel blog
```

- `create-project` es el comando de Composer para crear un nuevo proyecto.
- `laravel/laravel` corresponde al nombre del proyecto en [Packagist](https://packagist.org/packages/laravel/laravel). 
Este nombre se comprende de 2 partes divididas por una barra diagonal. La primera es el nombre de la organización, la segunda es el nombre del proyecto.
- `blog` es el nombre del proyecto, esto puedes personalizarlo a la cadena que quieras, ten en cuenta que este también será el directorio donde Composer instalará tu proyecto

:::tip
Para ingresar al directorio (carpeta) de la instalación de Laravel puedes escribir en la [linea de comandos](https://es.wikipedia.org/wiki/L%C3%ADnea_de_comandos_de_Windows#:~:text=La%20L%C3%ADnea%20de%20Comandos%20de,las%20diversas%20versiones%20Microsoft%20Windows.&text=A%20partir%20de%20la%20versi%C3%B3n,la%20funcionalidad%20de%20la%20misma.)

``` bash 
cd blog
```
:::