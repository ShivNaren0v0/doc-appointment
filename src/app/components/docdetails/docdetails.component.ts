import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doctor } from '../../models/doctor';

import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { Appointment } from '../../models/appointment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-docdetails',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './docdetails.component.html',
  styleUrl: './docdetails.component.css'
})
export class DocdetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  patientService = inject(PatientService);
  doctor: Doctor = new Doctor();
  appointment: Appointment = new Appointment();
  doctorId = -1;
  
  constructor() {
      this.doctorId = Number(this.route.snapshot.params['id']);
      this.patientService.getDoctorsById(this.doctorId).subscribe(  
        (data) => this.doctor = data
        
      );

      this.appointment.doctorId = this.doctorId;
      this.appointment.patientId = Number(localStorage.getItem('patid'));
      this.appointment.status = false;
      
  }

  submitRequest():void{
    this.patientService.submitAppointmentRequest(this.appointment).subscribe(
      (data) => {this.appointment = data;
        Swal.fire('Appointment Request Submitted');
        }
    );
    
  }

  
}
