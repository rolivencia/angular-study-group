import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouteLink } from 'src/app/_models/link';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, NgForOf],
  template: `
    <nav>
      <ul class="flex">
        <li *ngFor="let route of routes">
          <a [routerLink]="route.path">{{ route.label }}</a> 
        </li>
      </ul>

      <button type="button" (click)="onLoginButtonClicked()">
        Iniciar Sesión
      </button>
    </nav>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() routes: RouteLink[] = [];
  @Output() loginClicked: EventEmitter<string> = new EventEmitter<string>();

  onLoginButtonClicked(){
    this.loginClicked.emit('Botón de login clickeado');
  }
}