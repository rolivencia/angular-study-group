import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { RouteLink } from './_models/link';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header [routes]="appRoutes" (loginClicked)="onLoginClicked($event)"/>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer/>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'home-rentals';
  appRoutes: RouteLink[] = [
    {
      label: 'Home',
      path: '/home'
    },
    {
      label: 'Dashboard',
      path: '/dashboard'
    }
  ];

  onLoginClicked(event: string): void {
    console.log(event);
  }
}
