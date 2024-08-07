---
title: 'Cómo Trabajar con Datos en Astro'
description: 'Aprende a gestionar datos locales, recuperar datos remotos, importar archivos locales y utilizar colecciones de contenido para todos tus proyectos en Astro. Esta guía te enseñará métodos simples y avanzados para manejar tus datos.'
pubDate: 'Aug 08 2024'
heroImage: '/hero-img/001-trabajar-con-data-en-astro-480p.png'
---

# Cómo Trabajar con Datos en Astro

Astro es una herramienta poderosa y flexible para construir sitios web estáticos y dinámicos. Una de las capacidades más útiles de Astro es la forma en que maneja y trabaja con datos. En este artículo, exploraremos cómo puedes trabajar con datos en Astro, desde lo más simple hasta lo más complejo.

## Introducción

Astro es conocido por su simplicidad y escalabilidad. Puedes mantener algunos datos en la parte frontal de un componente Astro o crear endpoints API dinámicos que pueden ser referenciados desde cualquier lugar, incluso dentro de un componente de React. Todo esto está disponible dentro de Astro, lo que te permite adaptarte a tus necesidades específicas de datos.

## Métodos para Trabajar con Datos en Astro

### 1. Datos Locales Simples

El método más básico para trabajar con datos en Astro es mantener los datos directamente en el archivo del componente. Esto es útil para datos que son específicos de un solo componente o página.

```astro
---
const data1 = [
  { name: 'Alice' },
  { name: 'Bob' },
  { name: 'Charlie' }
];
---
<ul>
  {data1.map(item => (
    <li>{item.name}</li>
  ))}
</ul>
```

En este ejemplo, `data1` es una matriz de objetos que se mapea a una lista de elementos HTML.

### 2. Recuperar Datos Remotos

Astro permite hacer solicitudes de datos remotos durante la compilación. Esto es útil cuando necesitas datos de una API o de otro servidor.

```astro
---
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data2 = await res.json();
---
<ul>
  {data2.slice(0, 4).map(post => (
    <li>{post.title}</li>
  ))}
</ul>
```

Aquí, estamos haciendo una solicitud a una API REST y mapeando los datos recibidos a una lista de elementos HTML.

### 3. Importar Archivos Locales

Astro permite importar archivos locales como JSON, TypeScript y Markdown directamente en tus componentes.

```astro
---
import data3json from './data/authors.json';
---
<ul>
  {data3json.map(author => (
    <li>{author.name}</li>
  ))}
</ul>
```

En este caso, estamos importando un archivo JSON que contiene una lista de autores y mapeando esos datos a una lista de elementos HTML.

### 4. Usar astro.glob

Puedes usar `astro.glob` para importar múltiples archivos a la vez.

```astro
---
const data3glob = await Astro.glob('./data/**/*.md');
---
<ul>
  {data3glob.map(post => (
    <li>{post.frontmatter.title}</li>
  ))}
</ul>
```

Este método es útil para trabajar con muchos archivos, como un blog que tiene múltiples archivos Markdown.

### 5. Colecciones de Contenido

Astro tiene una poderosa característica llamada "colecciones de contenido" que te permite definir y trabajar con datos de contenido de manera tipada.

```astro
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

export const collections = {
  products: defineCollection({
    schema: z.object({
      name: z.string(),
      price: z.number(),
      color: z.string(),
      brand: z.string(),
      category: z.enum(['electronics', 'furniture', 'clothing'])
    })
  })
};
```

Aquí definimos una colección de productos con un esquema utilizando `zod`. Luego, podemos usar esta colección en nuestros componentes.

```astro
---
import { getCollection } from 'astro:content';
const products = await getCollection('products');
---
<ul>
  {products.map(product => (
    <li>{product.data.name} - ${product.data.price}</li>
  ))}
</ul>
```

Este método te permite tener un control tipado sobre tus datos, lo que facilita la validación y el manejo de datos complejos.

## Conclusión

Astro nos ofrece una variedad de métodos para trabajar con datos, desde los más simples hasta los más complejos. Ya sea que estés trabajando con datos locales, datos remotos, archivos locales o colecciones de contenido, Astro tiene las herramientas que necesitas para construir aplicaciones web poderosas y eficientes. Experimenta con estos métodos y descubre cómo puedes aprovechar al máximo las capacidades de Astro en tus proyectos.

---