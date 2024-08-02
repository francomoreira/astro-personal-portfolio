---
title: 'First post'
description: 'description de ejemplo'
pubDate: 'Jul 08 2022'
heroImage: '/hero-img/lee-menos-pero-lee-bien.jpg'
heroImageAlt: 'Imagen de portada'
---


#javascript #platzi 

> DOM y Web API
## Recomienda tener instalado `node`  

## Que es el dom?
El critical rendering path es el encargado de convertir el JavaScript, css y html en los pixeles que se ven al cargar una página web.

el navegador crea dos arboles:
* DOM el árbol para el html
* CSSOM (Css Object Model) el árbol para el css

Se le dice arboles porque esa es la estructura de datos que representan

**Dom** Document Object Model
- representación del html
- tiene estructura de árbol de nodos
- puede ser modificado con JavaScript

Árbol [[HTML]] esta es un representación gráfica de com seria.
![[arbol-html.png]]

El DOM es 
1. Una representación del HTML
2. Estructura en forma de árbol de nodos
3. Es un modelo que puede ser modificado, existe para ser modificado. 


## Web APIs modernas

Analogando :u

Un ejemplo para entender el back, front y apis

- el backend es la cocina
- el frontend serían las mesas, la decoración de ellas
- las apis serían los meseros

#### Apuntes

- DOM + [[JavaScript]] = Web API
- Una web API es un puente que nos permite conectar el JS con el DOM para poder manejarlo (leer y modificar)

> Actualmente existen más de 70 web APIs, DOM es solo una de ellas

- ya existen diferentes propósitos
    - Animaciones
    - Drag & Drop
    - Transmisión de video con web RTC
    - Incluso pagos sin necesidad de otro servicio
- Debemos hacernos dos preguntas al momento de usar las APIs
    **¿Como lo uso?**
        - **MDN** contiene bastante información acerca de las webs APIs
        - developer.mozilla.org
    **¿Puedo usarlo?**
        - No todas las webs API's estarán soportadas por todos los navegadores entonces podemos usar **caniuse.com**
        - Chrome tiene bastante compatibilidad con nuevas APIs

**RESUMEN:** Para manejar el DOM mediante [[JavaScript]] se debe tomar en cuenta que estaremos usando una web API, cada vez que usemos una de ellas debemos tomar en cuenta dos preguntas de cómo usarlo y si se puede implementar en todos los navegadores o usuarios que deseemos llegar

> Operaciones básicas

## Leer nodos
Desde JavaScript podemos leer nodos, tenemos 3 formas de hacerlo: 

#### getElement

- `document.getElementById():` Obtiene un elemento por su *ID*
- `parent.getElementByTagName():` Retorna un arreglo (realmente es un `HTMLCollection`) con todos los resultados coincidentes por el nombre de su *etiqueta*
- `parent.getElementByClassName():` Retorna un arreglo (realmente es un `HTMLCollection`) con todos los resultados coincidentes por su *clase*

> getElementById --> Solo retorna un elemento porque un id es único
> getElementByClass --> Puede traer mas de uno
> getElementByTagName --> Puede traer mas de uno

Sin embargo, existen 2 selectores más poderosos 👀: .
#### querySelector
- `parentElement.querySelector():` Selecciona un solo elemento y lo devuelve, la selección se hace a través de lo que le pases entre paréntesis, y la selección puede ser con sintaxis de CSS!! > Retornará la primera coincidencia
- `parentElement.querySelectorAll():` Selecciona varios elemento y los devuelve, la selección se hace a través de lo que le pases entre paréntesis, y la selección puede ser con sintaxis de CSS!! Retornará un arreglo (en realidad es un `NodeList`)
https://platzi.com/new-home/clases/2193-dom/34857-leer-nodos/


### getElementById
Por ejemplo si con javascript quiero traerme un elemento por su ID puedo usar 
`document.getElementById('id del elemento')`
en este ejemplo el id es `firsName`
![[DOM-ID.png]]
Asi se veria en la consola de javascript con `getElementById`
![[consola-DOM.png]]

### getElementByTagName
Asi se veria con `getElementsByTagName` donde podemos traernos todos las etiquetas `input` de nuestro `html`
![[getELementByTagName.png]]

### getElementByClassName
y asi se veria si me traigo todas las etiqu
etas que posean la clase  `form-control` usando `document.getElementByClassName` 

> cuando usamos classname no ponemos el punto como lo hariamos en css, solo ponemos el nombre de la clase

![[getElementByClassName-DOM.png]]

> dice que hay selectores nuevos que son mas convenientes de usar en aplicaciones que los anteriores mencionados. 

La preferencia por `querySelector` y `querySelectorAll` sobre `getElementById`, `getElementsByClassName` y `getElementsByTagName` se debe a varias razones:

1. **Flexibilidad y Poder**: `querySelector` y `querySelectorAll` permiten utilizar selectores CSS complejos, lo que brinda más flexibilidad para seleccionar elementos en función de múltiples criterios como clases, IDs, etiquetas y atributos. Esto es especialmente útil en aplicaciones web complejas con una estructura HTML sofisticada.

2. **Selectores CSS**: Con `querySelector` y `querySelectorAll`, puedes utilizar selectores CSS familiares para seleccionar elementos. Esto hace que el código sea más legible y fácil de entender para los desarrolladores familiarizados con CSS.

3. **Selección de Múltiples Elementos**: `querySelectorAll` devuelve una NodeList que contiene todos los elementos que coinciden con el selector, permitiendo la selección de múltiples elementos de una sola vez. Esto es útil cuando necesitas trabajar con varios elementos a la vez.

4. **Compatibilidad con Selectores Complejos**: A menudo, necesitas seleccionar elementos en función de ciertas características específicas, como elementos anidados o combinaciones de clases y etiquetas. Los selectores complejos son más fáciles de expresar y utilizar con `querySelector` y `querySelectorAll`.

5. **Mejor Rendimiento**: En muchos casos, `querySelector` y `querySelectorAll` pueden ser más eficientes en términos de rendimiento que las alternativas, especialmente cuando se utilizan selectores complejos.

6. **Consistencia**: Usar `querySelector` y `querySelectorAll` promueve la consistencia en el código, ya que estás utilizando una API para seleccionar elementos en lugar de varias APIs diferentes (`getElementById`, `getElementsByClassName`, `getElementsByTagName`).

7. **Familiaridad con Desarrolladores**: Muchos desarrolladores están acostumbrados a trabajar con selectores CSS en sus estilos y hojas de estilo, por lo que les resulta natural aplicar la misma sintaxis y lógica para seleccionar elementos en JavaScript.

En resumen, `querySelector` y `querySelectorAll` ofrecen una forma más potente, flexible y consistente de seleccionar elementos en una página web utilizando selectores CSS, lo que puede hacer que el código sea más claro y fácil de mantener.

---
### querySelector
Me a permitir seleccionar cualquier cosa del documento, como es para cualquier cosa esta muy ligado a los selectores de css. y no funciona con el nombre solito como en en el `getElementBy....` 

#### Id 
para seleccionar un ID
```js
document.querySelector('#ID')
```

ejemplito:
![[querySelector1.png]]

#### Class
para seleccionar una Clase, me traerá la primer clase que encuentre con ese mismo nombre.
```js
document.querySelector('.nombre-de-la-clase')
```


#### Etiquetas html
para seleccionar una etiqueta, toma la primer etiqueta que hace mach y me la trae
```js
document.querySelector('input')
```

> cualquier selector de CSS funcionaria aqui

### querySelectorAll
NO hace falta mucha explicación es lo mismo que el anterior, solo que este nos trae varios elementos que hacen mach con nuestro parámetro de búsqueda.\

#### Id
NO tiene sentido traer id con este, porque el id es un elemento único, de igual manera no se nos e retornado un error si no que se nos retorna un array en realidad `nodelist` con un elemento único. 
```js
document.querySelectorAll('#id')
```

ejemplito:
![[queriselectorall.png]]

#### class
este me traera todas las clases que hagan mach con mi busqueda, me lo devuelve en un formato array.

```js 
document.querySelector('.nombre-de-la-clase')
```

![[queryselector-clases.png]]

#### etiquetas html

esto me traerá todas las etiquetas que coincidan con mi búsqueda, busquemos los `inputs`

```js
document.querySelector('nombre-de-la-etiqueta')
```

![[querySelector-Etiqueta.png]]

> los ejemplos fueron realizado con la web de [bootstrap](https://getbootstrap.com/docs/5.3/examples/checkout/)

en la mayoria de los casos, `querySelector` y `querySelectorAll` sera quien  
## NodeLists vs Arrays

Cuando usamos un `querySelectorAll()` [[JavaScript]] nos devuelve un objeto llamado NodeList, y aunque no es un array, se comporta muy similar, pero **es muy importante comprender la diferencia** porque luego los empezamos a manejar como arrays y nos preguntamos por qué no funciona. . 
Básicamente un NodeList es una lista de elementos del DOM (p, div, nac, header, body, etc), la principal diferencia con un array es que carece de muchos métodos que hacen "útiles" a los array.
Pero desde ECMAScript 6 se puede "parsear" un NodeList a un Array

Una de las formas de convertirlos a array es la vista en la clase:

```js
const nodeListArray = [...nodeList]
```

Sin embargo, a mi me gusta más está forma y es más legible:

```js
const nodeListArray = Array.from(nodeList)
```

De esas formas podemos obtener un arreglo a partir de un NodeList (o cualquier objeto iterable) 

nodelist:
![[nodelist-js.png]]
analicemos esto, primero lo guardo adentro de  una variable

```js
const nodeList = document.querySelectorAll('input')
```

la principal diferencia es que este `nodeList` no posee todos los métodos que poseen los [[Arrays]] 

en la siguiente imagen podemos ver que si posee el `lenght` y el [[Método  ForEach()]] igual a los arrays.

![[nodelist-metodos-ej.png]]

Pero por ejemplo no se puede utilizar `map`, `some`, `filter`, `reduce`, 
![[metodos-nodelist-dom.png]]

> Siempre que sea posible, convierte un nodelist en un array, no solo por la cantidad de métodos que los array poseen, si no por que los motores de javascript que poseen los navegadores están mejores optimizados para trabajar con arrays, mas que con los nodelist.

## Crear y agregar nodos
Al decir "crear nodos" nos referimos a crear elementos dentro de nuestro DOM. Para ello podemos hacer uso de: .

- `createElement`: Para crear una etiqueta HTML:
```js
// Solo se ha creado, aún no se agrega al DOM 
const etiquetaH1 = document.createElement("h1")
```
- `createTextNode`: Para crear un texto:
```js
// Solo se ha creado, aún no se agrega al DOM 
const texto = document.createTextNode("¡Hola, Mundo!")
```

en este punto solo lo hemos creado, pero no agregado. solo lo tenemos creado en memoria dentro de una variable, pero para agregarlo en nuestra pagina necesitamos agregar dichos nodos. para ello tenemos muchos métodos.

* `parentElement.appendChild`
* `parentElement.append`
* `parentElement.insertBefore`
* `parentElement.insertAdjacentElement`

### appendChild 
siempre me lo agrega al final, si yo tengo un div con un h1 y un p, agrego con appendChild un h3, este se creara al final, osea me quedaria. h1 - p - h3.

### append
append es la evolución de appendChild
* podemos agregar mas de un nodo
* puedes agregar texto, directamente.
* IE 11: no soportado

se puede enviar texto facilmente, con appendchild necesitaba primero usar `createTextNode` y luego agregarlo, pero con `append` le envío el string y listro.


### insertBefore
Sirve igual que append solo que este lo crea antes. 
a inserBefore le tenemos que pasar dos cosas
primero: cual es el nodo que queremos agregar
segundo: cual es la referencia a la que nos estamos basando a la hora de agregar.

```js
document.insertBefore(node, referencia);
```

primero traigo el nodo, que en el ejemplo sera un container que el div del header del sitio de ejemplo
![[query-selector2.png]]
```js
const container = document.querySelector('.clase-del-elemento')
```

luego debo crear el elemento en cuestion a agregar, en este ejemplo usa un h1
```js
const titulo = document.createElement('h1')
```

lo que vamos a intentar es que ese h1 que no al final del contenedor ni primero sino donde yo quiero. 

ejemplo:
![[div-ejemplo-dom.png]]
observemos el anterior código y vemos que corresponde a un `div` que dentro posee distintos elementos, los ordenemos:
1. `img` que es una imagen
2. `h2` un subtitulo
3. `p` un párrafo.

supón que nosotros queremos agregar nuestro `h1` entre medio de la imagen (`img`)y el subtitulo (`h2`).
1. `img` 
2. `h1` ---> nuestro Titulo que queremos agregar
3. `h2` 
4. `p` 

como lo hacemos?
dijimos que la sintaxis era:
```js
document.insertBefore(node, referencia);
```

ya tenemos el node, ahora nos falta la referencia y que es la referencia? 
Es el elemento que estaría siguiente de donde nosotros queremos agregar el nuevo elemento.
en este caso es el h2, porque justamente queremos meter el h1 entre la img y el h2.. entonces el h2 seria nuestra referencia, por ello necesito traerme ese h2  *referencia*.

```js
const referencia = document.querySelector('h2');
```

siendo asi ya puedo decirle

```js
container.insertBefore(titulo, referencia)
```

![[insertbefore-div.png]]

la clave para todos los métodos que empiezan con `insert` es tener en cuenta cual es la referencia, en `inserBefore` la referencia va *despues* del nodo que queremos agregar

🚨 Hay que tener en cuenta que en el `inserBefore` el node de referencia tiene que ser hijo directo del padre, quiere decir que si el nodo de referencia se encuentre uno o varios niveles dentro del arbol, esto no va a funcionar

Esto no se puede

```markdown
.
└── div <--- (elemento padre)
	├── img
	├── h1 <-- elemento a agregar
	└── div
		└── p
			└── spam (usar esto como referencia no es valido)
```

Esto si se puede:

```markdown
.
└── div <--- (elemento padre)
	├── img
	├── h1 <-- elemento a agregar
	└── div <-- ideal para referencia (hijo directo del padre)
		└── p
			└── spam
```

[arbol creado con](https://tree.nathanfriend.io/)



### insertAdjacentElement 

```js
referencia.insertAdjacentElement(
	POSICION:
		'beforebegin' / 'afterbegin' / 'beforeend' / 'afterend',
	NUEVO_NODO,
)
```


 