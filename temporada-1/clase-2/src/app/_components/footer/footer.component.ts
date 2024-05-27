import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      footer works!
    </p>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

}
