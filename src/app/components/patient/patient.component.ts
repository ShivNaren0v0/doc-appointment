import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {

}
