import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientService } from '../../services/patient.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-patient-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './patient-login.component.html',
  styleUrl: './patient-login.component.css'
})
export class PatientLoginComponent {route: ActivatedRoute = inject(ActivatedRoute);
  patientService = inject(PatientService);
  applyForm = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null)
  });
  constructor() {
  }

  submitApplication() {
    this.patientService.login(
      this.applyForm.value.email ?? '',
      this.applyForm.value.password ?? ''
      );
  }


}
