# Meep App. React

Creación una pequeña aplicación web, que muestre la siguiente
información:
● Un mapa con los recursos posicionados, sería interesante ver como
usas las agrupaciones en el zoom en el mapa
● Un panel lateral de navegación estilo árbol, para poder filtrar por
tipología de recursos
● Indicación de algún tipo del nivel de batería, por ejemplo, color verde del
recurso si la batería está por encima del 25%, nos gustaría ver algún tipo
de modal cuando pasamos por encima del recurso viendo esta
información.
● Y otro panel navegable, donde se muestre una tabla filtrable y ordenable
por cada campo, con una paginación de 10 elementos. Los campos a
mostrar serán los siguiente: matrícula, coordenadas y modelo del
vehículo.

Se han utilizado las siguientes herramientas de desarrollo web:
- HTML
- CSS3  
- JAVASCRIPT
- REACT


## Crear una aplicación de Create React Apps

```
npx create-react-app meep
```

## Instalación google-map-react 

Librería de React para poder visualizar el mapa de google maps en la aplicación
Además necesitamos una GOOGLE KEY. Archivo .env.example
```
npm i google-map-react
```


## Instalación de use-supercluster

Para poder agrupar por puntos cercanos cuando realizamos zoom sobre el mapa.
```
npm i use-supercluster
```

## Instalación de axios para llamar realizar método get en el endpoint facilitado

```
npm i axios
```

## Instalamos esta librería para ordenar, filtrar y realizar paginación de la BBDD

```
npm i ag-grid-react
```

## Instalación de react-router-dom

```
npm i react-router-dom
```

## Instalación de enzyme para el testing

```
npm i --save-dev enzyme
npm I --save-dev enzyme-adapter-react-16
```

## Formas de arrancar 

* En desarrollo

```
npm build
```

* En producción
```
npm start
```

* Para TDD
```
npm run test
```


## Rutas

* '/': Página principal de la aplicación.

* '/meep': Redirecciona a la página principal.

* '/404': Página de error 404.


### Desarrollado por:

Jorge Salazar.