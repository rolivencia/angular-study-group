<div align="center" width="100%">
    <h1>Angular Study Group</h1>
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://github.com/rolivencia/angular-study-group/assets/32349705/f69e9fcd-1705-4931-a4eb-7a1a768bd5e6">
        <img width="33%" alt="La Cuentoneta" src="https://github.com/rolivencia/angular-study-group/assets/32349705/afc1cea9-e94a-4eaa-a52a-d49dee0cc529">
    </picture>
</div>

---

Recursos y material de estudio del Angular Study Group de FrontendCafé

## Objetivo del grupo

## Motivación

## Metodología

Nos reuniremos semanalmente en el canal `🔮 | angular-study-group` del servidor de FrontendCafé los días miércoles, en el horario de 20:00 a 21:30 (GMT-3).

## Conocimientos previos
Si bien este grupo de estudio está orientado a principiantes en Angular, es recomendable tener nociones básicas de HTML, CSS, JavaScript y TypeScript.

Por defecto, Angular hace uso de HTML y TypeScript para escribir el código de sus componentes, y específicamente de TypeScript para escribir el código referente a los demás tipos de _bloques de construcción_ utilizados por el framework. De manera recomendada se utiliza SCSS, un superconjunto de CSS basado en SASS, para escribir el código referido a las hojas de estilos de los componentes de las aplicaciones.

## Qué necesitamos para empezar?

- NodeJS, versión 18 en adelante.
  - Se requiere como mínimo esta versión para trabajar con Angular versión 17.3.x, la cual utilizaremos durante los encuentros del grupo de estudio.
  - Se recomienda utilizar NodeJS versión 18 o cualquier versión LTS superior.
- La CLI de Angular (interfaz de línea de comandos), en su versión 17.3.x
  - Utilizaremos Angular en su versión 17.3.x para los encuentros de este grupo de estudio
- Un editor de código o de texto, o bien un entorno integrado de desarrollo (IDE).
  - Recomendamos el uso de Visual Studio Code, dados los _plugins_ disponibles para trabajar con Angular.
  - En caso de que cuentes con un correo electrónico estudiantil (dominio .edu), una opción de IDE es usar Jetbrains WebStorm.
 
## Currícula del grupo de estudio - Temporada #2

En la segunda temporada nos enfocaremos en seguir el segundo tutorial disponible en angular.dev, mediante el cual desarrollaremos una aplicación completa desde cero repasando todos los conceptos básicos y herramientas que hacen alf framework. El tutorial está disponible para consultarse en https://angular.dev/tutorials/first-app

### Encuentro 1: Presentación del tutorial y desarrollo de los primeros componentes
* Introducción.
* Hello world! - Generando nuestra aplicación.
* Creación de `HomeComponent`.
* Creación de `HouseLocationComponent`.

#### Grabación del encuentro en YouTube: https://www.youtube.com/watch?v=dC9_GYeinHc&list=PLBLth4FFZghvoKAtlWGgsEPtyEIYWZRr9
#### Challenge #1: https://github.com/rolivencia/angular-study-group/blob/main/temporada-2/challenge-1.md
  
#### Challenge:
* Estrategias para el desarrollo de un componente navbar

## Currícula del grupo de estudio - Temporada #1

En esta primera entrega del grupo de estudio, nos centraremos en los siguientes temas a lo largo de cuatro encuentros, desarrollando una aplicación completa en el camino, a la cual denominaremos `Home Rentals` y será una aplicación web de alquileres, con las etapas de desarrollo de la misma basadas en el proyecto de ecommerce propuesto en los [tutoriales de la documentación oficial de Angular]([https://angular.io/tutorial/first-app](https://angular.dev/)).

### Encuentro 1: Instalación de herramientas y creación de un proyecto de Angular

Como parte del primer encuentro del grupo de estudio, se lleva adelante una revisión sobre cómo proceder con la instalación de las herramientas fundamentales para trabajar con Angular, con la consiguiente creación de un nuevo proyecto bajo la variante _standalone_.

El resultado de los desarrollos del primer encuentro puede hallarse en la carpeta `clase-1` del presente repositorio.

1. Instalación de NodeJS. Uso de nvm
   1. NVM para Windows: https://github.com/coreybutler/nvm-windows
   2. NVM para sistemas basados en POSIX (Linux/MacOS): https://github.com/nvm-sh/nvm 
3. Instalación de la CLI de Angular, aplicable a cualquier versión. Para este grupo de estudio usaremos la versión 17.3.
   1. [Paso a paso en video, vía Loom](https://www.loom.com/share/3b663d55f20e43f4b20b7df4742d3316?sid=53d97de5-7b41-4ea5-bd24-3934daf7e6b8) 
5. Uso de Visual Studio Code para trabajar con Angular. Extensiones recomendadas:
   1. Angular Language Service, oficial de Angular - https://marketplace.visualstudio.com/items?itemName=Angular.ng-template
   2. Extensiones esenciales para Angular, de John Papa - https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials
6. Uso de la CLI para crear un nuevo proyecto de Angular.
   1. [Utilización de `ng new`](https://angular.io/cli/new) para la creación de un nuevo proyecto. Explicación de los flags en los comandos soportados por la CLI de Angular.
   2. [Paso a paso en video, vía Loom](https://www.loom.com/share/4a33bf2b078547fd8a30b51e71057bb1?sid=25be88ff-b799-408c-bd69-e9361af25f41).
   3. [Estructura de un proyecto nuevo de Angular, en modo standalone](https://www.loom.com/share/3fe0c1d1f16a4b70a22375b007a05b45).
7. Estructura de un proyecto de Angular. Patrón de diseño MVVM.
8. Uso de la CLI para crear componentes, servicios y otros _bloques de construcción_ de Angular.
   1. [Utilización de `ng generate component`](https://angular.io/cli/generate) para la creación de un nuevo componente standalone. Explicación de los flags en los comandos soporatdos por la CLI para `generate` 
9. Alternativas para librerías y frameworks de CSS.
   1. TailwindCSS.
   2. Bootstrap vía ng-bootstrap.
   3. Material Design vía Angular Material

### Componentes y _data binding_
1. Componentes basados en módulos y componentes standalone.
2. Inicialización de componentes y uso de _Lifecycle hooks_.
3. Comunicación entre componentes.
4. Componentes presentacionales y componentes _smart_.
5. _Data binding_ unidireccional y bidireccional.
6. _Data binding_ con _inputs_ y _outputs_.
7. Nociones básicas de enrutamiento de componentes. Eager loading y lazy loading.

### Templates, directivas de atributo y directivas estructurales
1. Templates y _string interpolation_.
2. Directivas de atributo: _property binding_ y _event binding_. 
3. Directivas estructurales: *ngIf, *ngFor y *ngTemplateOutlet.
4. Uso de ng-template y ng-container.

#### Recursos
* ngIf: [artículo en Angular University, en inglés](https://blog.angular-university.io/angular-ngif/)
* ngFor: [artículo en Angular University, en inglés](https://blog.angular-university.io/angular-2-ngfor/)
* ngTemplate, ngContainer y ngTemplateOutlet: [artículo en Angular University, en inglés](https://blog.angular-university.io/angular-ng-template-ng-container-ngtemplateoutlet/)

### Servicios y _dependency injection_
1. Crear un servicio. Agregar services como providers.
2. Inyectar un servicio en un componente vía constructor y mediante la función inject.
3. Comunicación entre componentes mediante servicios.
4. Fetch a Web API mediante HttpClient.

### Videos de clases anteriores

- [Clase 1](https://www.youtube.com/watch?v=MMfv1Y7c-yU)
- [Clase 2](https://www.youtube.com/watch?v=k2nV4WZCLJk)
- [Clase 3](https://www.youtube.com/watch?v=ZlekTv_Xnp8)
- [Clase 4](https://www.youtube.com/watch?v=WjJjlSX1Yh4)
- [Clase 5](https://www.youtube.com/watch?v=3iJTHXHvW3w)
- [Clase 6](https://www.youtube.com/watch?v=W_oVD1Ex2D0)
- [Clase 7](https://www.youtube.com/watch?v=Gzv5tyBLdJI)
- [Clase 8](https://www.youtube.com/watch?v=dHFyeno30V4)

## Recursos para iniciarse
- Tabla de atajos en Angular, por DevTalles: [carilla en formato PDF](https://devtalles.com/files/angular-cheat-sheet.pdf)
- TypeScript: Guía completa y manual de mano, por Fernando Herrera: [playlist de videos en YouTube](https://www.youtube.com/watch?v=FufR-Vailzk&list=PLCKuOXG0bPi2J-C0WPRZdHTG6pareIvV2&ab_channel=FernandoHerrera).
- Curso de TypeScript, por OpenBootcamp: [playlist de videos en YouTube](https://www.youtube.com/watch?v=RI7j5bicTEw&list=PLkVpKYNT_U9egW5padLMHmnTPb6xm4hLf&index=2)
- TypeScript in 50 Lessons, de Stefan Baumgartner: [libro en formato PDF, en inglés](https://www.smashingmagazine.com/provide/eBooks/typescript-in-50-lessons.pdf)
- Tutorial _Getting Started_ de la documentación oficial de Angular: [sitio web, en inglés](https://angular.io/start#getting-started-with-angular)
- "Angular for Beginners", por Angular University: [curso gratuito en línea](https://angular-university.io/course/getting-started-with-angular2?utm=blmfc)
- Google Developer Course with Angular, por SoloLearn: [curso gratuito en línea](https://www.sololearn.com/learn/courses/angular)
  
## Recursos para profundizar
- Projects in Angular, 3rd. ed., por Aristeidis Bampakos
- Learning Angular, 4th ed., por Aristeidis Bampakos
- Tutoriales para Angular en Codelabs, por Google: [website, en inglés](https://codelabs.developers.google.com/?text=Angular)
