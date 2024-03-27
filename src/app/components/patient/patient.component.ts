import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PatauthService } from '../../services/patauth.service';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [RouterModule,FormsModule, RouterOutlet,CommonModule,NgIf],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {
  username: string | null = null;
  constructor(public _authService:PatauthService){
    this.username = localStorage.getItem('patname');
  }

}
