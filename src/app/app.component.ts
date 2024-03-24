import { Component } from '@angular/core';
import { ReviewComponent } from './components/review/review.component';
import { RouterModule,RouterOutlet,RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { authGuard } from './guard/auth.guard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReviewComponent,
    RouterModule,
    RouterOutlet,
    RouterLink,
    FormsModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'doc-appointment';
}
