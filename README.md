# React + Redux
Curso de ReactJS + Redux
## Base git@gitlab.com:farriagada/React-One-Piece.git

# Redux se basa en 3 Principios

## Una sola fuente de la verdad
Todo el estado de tu app esta contenido en un único store
## El estado es de solo lectura
La única forma de modificar el estado es emitir una acción que indique que cambió
## Los cambios se hacen mediante funciones puras
Para controlar como el store es modificado por las acciones se usan reducers puros

Funcionamiento de Redux:
El Store (manda datos) > Vista (dispara) > Acciones (pasan por) > Reducers (actualiza) > Store
![Redux](http://staltz.com/img/redux-unidir-ui-arch.jpg)

## Store
- Lugar donde se almacenan los datos
- Solo se guardan datos serializables
- Es inmutable
- Solo hay **uno** por app

## Vista
- Puede ser cualquier cosa (React, Angular, etc)

## Accciones
- Representan un **cambio en el estado**
- Son objetos planos de javascript (POJO)
- Tienen un **type** y un **payload**
- Definen datos adicionales en un key **meta** (Ej: enviar datos a Google Analitics)
- Si hay un error lo definen en el key error

## Reducers
- Son funciones puras (Recibe args y no devuelve nada externo de lo que recibe)
- Reciben el estado actual y una acción
- Devuelve un **nuevo estado**

## Redux es extendible por medio de **Middlewares**
- se usan al momento de crear el Store
- funciones puras (ej: mandar request a una API, sockets, etc)
- se ejecutan antes de Reducers





Cada cuadro de color representa un Component de React distinto que en ocaciones se encuentran uno dentro del otro,
(hijo y padre), al hacer click en el Component de la imagen se agrega un mensaje.

![](https://media.giphy.com/media/3oGRFJgetjypJ0b0Ig/giphy.gif)

## Setup
```shell
$ git clone git@gitlab.com:farriagada/onepiece-redux.git
$ cd onepiece-redux
$ npm install
$ npm run build
```
En otra Terminal para correr desde un servidor o solo ejecutar index.html en el navegador
```shell
$ npm run watch
```
