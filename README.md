# Relojes 12h y 24h

Este es el __blog__ del `pequeño componente web` que sirve para colocar un `reloj` en una web <mark>o en cualquier codigo html cual sea</mark>

## ¿Cómo funciona?

Exísten para el correcto funcionamíento de los ficheros en javascript, dos idéntidades html llamadas :

```html
<!-- La 1º de todas sería
 la que muestra un reloj en formato de 12 horas.  -->
<tag id="reloj12h"></tag>

<!-- La 2º de todas sería
 la que muestra un reloj en formato de 24 horas.  -->
<tag id="reloj24h"></tag>

```

### `id="nombre propio, o identidad del elemento o tag html"`. Para despistados 


> `#reloj12h` es la idéntidad asociada a la salida del reloj en modo 12 horas.

> `#reloj24h` es la idéntidad asociada a la salida del reloj en modo 24 horas.


***

#### Estilos generales

Ambos Relojes cúal séa el que vayas a úsar, se muestran con idéntico estilos y aparíencia.

#### Sobreescríbir estos estilos

Están para dar una aparíencia inicíal, pero de los __3 archivos__ `.js` uno de estos;  

> `./archivoEstilos.js` Sírve para dar estílos nuevos o, y sobreescríbir los por defecto.

Otro de los __3 archivos__ `.js`

> `./archivoConfiguracion.js` es opcional.

##### ¿Qué signifíca o por qué `opcional`?

###### Es un archivo importado por relojes y permite mostrar u ocultar las letras `am y pm`

> si la ruedecita que aparece junto al reloj molesta, solo hay que usar su identidad : `#configurar12h`

```html 

<tag id="configurar12h"></tag>

<!-- Usando esta idéntidad `#configurar12h`
 editando el archivo `./archivoEstilos.js`
 simplemente ocultarlo usando css.
 Ende darle estílos aparte también. -->

```
## El resto es muy símple

> `Archivo .js` `./relojes.js` es el documento princípal 

######  Debe lincarse al píe del documento, justo antes del tag `</body>`

> Para que funcíone correctamente es obligado el úso del atributo html, `type=""` usando el valor por defecto en `module`
***

[link al repositorio del reloj](https://github.com/marcostonfor/clocks)

***
