import { Component, Input, inject } from '@angular/core';
import { Appointment } from '../../models/appointment';
import { CommonModule, NgIf } from '@angular/common';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import Swal  from 'sweetalert2';
@Component({
  selector: 'app-appointmentwidget',
  standalone: true,
  imports: [CommonModule, NgIf, RouterModule],
  templateUrl: './appointmentwidget.component.html',
  styleUrl: './appointmentwidget.component.css'
})

export class AppointmentwidgetComponent {
@Input() appointment!: Appointment;
patientService = inject(PatientService);
performpayment(id?:number):void {
  this.patientService.performPayment("UPI",id).subscribe(
    ()=>{Swal.fire("Payment Successfull");},
  )
}

}