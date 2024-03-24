import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-doctor-navbar',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './doctor-navbar.component.html',
  styleUrl: './doctor-navbar.component.css'
})
export class DoctorNavbarComponent {

}
