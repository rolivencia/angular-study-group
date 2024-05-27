import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav>
      <ul>
        <li><a routerLink="/home">Home</a></li>
        <li><a routerLink="/dashboard">Dashboard</a></li>
      </ul>
    </nav>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
