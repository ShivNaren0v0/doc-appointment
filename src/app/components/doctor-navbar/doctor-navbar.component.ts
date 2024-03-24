import { Component } from '@angular/core';
import { PatauthService } from '../../services/patauth.service';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-doctor-navbar',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './doctor-navbar.component.html',
  styleUrl: './doctor-navbar.component.css'
})
export class DoctorNavbarComponent {
  constructor(private _authService:PatauthService){}

}
