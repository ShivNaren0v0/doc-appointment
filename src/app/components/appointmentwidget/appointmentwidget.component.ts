import { Component, Input } from '@angular/core';
import { Appointment } from '../../models/appointment';
import { CommonModule, NgIf } from '@angular/common';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import Swal  from 'sweetalert2';
@Component({
  selector: 'app-appointmentwidget',
  standalone: true,
  imports: [CommonModule, NgIf, RouterModule],
  templateUrl: './appointmentwidget.component.html',
  styleUrl: './appointmentwidget.component.css'
})
export class AppointmentwidgetComponent {
  payment: boolean = false;
@Input() appointment!: Appointment;


performpayment():void {
  this.payment = true;
  Swal.fire('Payment Successful');
}


}

