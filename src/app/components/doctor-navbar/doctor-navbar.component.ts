import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DoctorService } from '../../services/doctor.service';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-doctor-navbar',
  standalone: true,
  imports: [RouterModule,FormsModule, RouterOutlet,CommonModule,NgIf],
  templateUrl: './doctor-navbar.component.html',
  styleUrl: './doctor-navbar.component.css'
})
export class DoctorNavbarComponent {
  constructor(public _authService:DoctorService){}

}
