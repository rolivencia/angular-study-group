# Angular Study Group
Recursos y material de estudio del Angular Study Group de FrontendCafé

## Objetivo del grupo

## Motivación

## Metodología

Nos reuniremos semanalmente en el canal `🔮 | angular-study-group` del servidor de FrontendCafé los días sábados, en el horario de 11:00 a 12:30 (GMT-3).

## Conocimientos previos
Si bien este grupo de estudio está orientado a principiantes en Angular, es recomendable tener nociones básicas de HTML, CSS, JavaScript y TypeScript.

Por defecto, Angular hace uso de HTML y TypeScript para escribir el código de sus componentes, y específicamente de TypeScript para escribir el código referente a los demás tipos de _bloques de construcción_ utilizados por el framework. De manera recomendada se utiliza SCSS, un superconjunto de CSS basado en SASS, para escribir el código referido a las hojas de estilos de los componentes de las aplicaciones.

## Qué necesitamos para empezar?

- NodeJS, versión 16 en adelante.
  - Se requiere como mínimo esta versión para trabajar con Angular versión 16, la cual utilizaremos durante los encuentros del grupo de estudio.
  - Se recomienda utilizar NodeJS versión 18 o superior.
- La CLI de Angular (interfaz de línea de comandos), en su versión 16.x
  - Utilizaremos Angular en su versión 16 para los encuentros de este grupo de estudio
- Un editor de código o de texto, o bien un entorno integrado de desarrollo (IDE).
  - Recomendamos el uso de Visual Studio Code, dados los _plugins_ disponibles para trabajar con Angular.
  - En caso de que cuentes con un correo electrónico estudiantil (dominio .edu), una opción de IDE es usar Jetbrains WebStorm.

## Currícula del grupo de estudio

En esta primera entrega del grupo de estudio, nos centraremos en los siguientes temas a lo largo de cuatro encuentros:

// TODO: Mejorar con documentación de La Cuentoneta.

### Instalación de herramientas y creación de un proyecto de Angular
1. Instalación de NodeJS. Uso de nvm
2. Instalación de la CLI de Angular 16.
3. Uso de Visual Studio Code para trabajar con Angular. Extensiones recomendadas.
   1. John Papa
   2. Oficiales
4. Uso de la CLI para crear un nuevo proyecto de Angular.
5. Estructura de un proyecto de Angular. Patrón de diseño MVVM.
6. Uso de la CLI para crear componentes, servicios y otros _bloques de construcción_ de Angular.
7. Alternativas para librerías y frameworks de CSS.
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
3. Directivas estructurales: *ngIf, *ngFor y *ngSwitch.
4. Uso de ng-template y ng-container.

### Servicios y _dependency injection_
1. Crear un servicio. Agregar services como providers.
2. Inyectar un servicio en un componente vía constructor y mediante la función inject.
3. Comunicación entre componentes mediante servicios.
4. Fetch a Web API mediante HttpClient.

## Recursos para profundizar
