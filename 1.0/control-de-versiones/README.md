---
pageClass: no-toc
---

# Flujo de trabajo básico con git

## Clonar un proyecto desde github.com
``` bash
git clone https://github.com/mujeres-en-las-tic/wetec
```


## Proceso de trabajo con git

#### Recibir cambios del proyecto desde github

``` bash
git pull
```

#### Ver el estatus de su area de trabajo
``` bash
git status
```

#### Si usted realizo algún cambio en los archivos del proyecto o agrego alguno nuevo. Va agregar esos cambios 

``` bash
git add . 
```

#### Esos cambios los vamos a confirmar (que queden guardados en el repositorio de git)

``` bash
git commit -m "Algo que describa el trabajo que acaba de realizar"
```


#### Enviar  cambios del proyecto desde su computadora a github.com

``` bash
git push
```
