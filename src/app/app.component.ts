import { Component } from '@angular/core';
import { ReviewComponent } from './components/review/review.component';
import { RouterModule,RouterOutlet,RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReviewComponent,
    RouterModule,
    RouterOutlet,
    RouterLink,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'doc-appointment';
}
