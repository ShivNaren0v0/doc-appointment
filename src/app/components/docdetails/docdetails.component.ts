import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doctor } from '../../models/doctor';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../../services/patient.service';
@Component({
  selector: 'app-docdetails',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './docdetails.component.html',
  styleUrl: './docdetails.component.css'
})
export class DocdetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  patientService = inject(PatientService);
  doctor: Doctor | undefined;
  doctorId = -1;
  applyForm = new FormGroup({
    name: new FormControl(null),
    date: new FormControl(null),
    time: new FormControl(null),
    email: new FormControl(null),
    description: new FormControl(null)
  });
  constructor() {
      this.doctorId = Number(this.route.snapshot.params['id']);
      this.doctor = this.patientService.getDoctorsById(this.doctorId);
  }

  submitApplication() {
    this.patientService.submitAppointmentRequest(
      this.applyForm.value.name ?? '',
      this.applyForm.value.date ?? '', 
      this.applyForm.value.time ?? '',
      this.applyForm.value.email ?? '',
      this.applyForm.value.description ?? ''
    );
  }


}
