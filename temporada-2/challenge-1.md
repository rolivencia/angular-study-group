# Angular Study Group - Challenge #1

![image](https://github.com/rolivencia/angular-study-group/assets/32349705/07c000fb-580b-400c-b53c-81ff18db2891)

En base al proyecto presentado como parte del primer encuentro de la segunda temporada, proponemos el challenge adjunto como mecanismo para poner en práctica los conocimientos adquiridos en el encuentro y fomentar la experimentación y el aprendizaje autónomo, yéndonos por fuera de simplemente seguir la guía del tutorial.

Deberás implementar una mejora en la barra de navegación (navbar) usada en el proyecto de Home Rentals, el cual presentamos en el encuentro #1 de la segunda temporada del grupo de estudio. La barra de navegación deberá seguir incluyendo el logo y el título del sitio, los cuales se implementan en la versión básica de la navbar presentada en la sección "[Create Home Component](https://angular.dev/tutorials/first-app/02-HomeComponent)", y deberá contar con tres enlaces de navegación adicionales: **Inicio, Contacto y Acerca de**, justificados los tres hacia la derecha de la barra de navegación.

Deberás crear un nuevo componente para alojar la barra de navegación mejorada, el cual deberá ser utilizado en el componente `app.component.html` del proyecto. Los enlaces del sitio no deberán estar _hardcodeados_ en el nuevo componente, sino que deben ser generados de forma programática, proyectados desde el componente superior (en este caso AppComponent) o pasados como parámetro. 

El título debe estar alineado a la izquierda y los enlaces a la derecha. Algunas estrategias sugeridas para la resolución del challenge pueden involucran el uso de `@Input() / input()`, `ng-content` y/o `*ngFor / @for`. No es necesario, por el momento, que los links de la navbar sean operativos — siendo la implementación de la navegación algo de lo que nos ocuparemos luego.

---
**Recursos recomendados:**
- [Anatomy of a component](https://angular.dev/guide/components)
- [Component API reference](https://angular.dev/api/core/Component) 
- [Creación de componentes mediante Angular CLI](https://angular.dev/cli/generate/component) 
