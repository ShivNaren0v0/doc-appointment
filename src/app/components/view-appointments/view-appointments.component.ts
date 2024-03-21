import { Component,inject } from '@angular/core';
import { AppointmentwidgetComponent } from '../appointmentwidget/appointmentwidget.component';
import { CommonModule } from '@angular/common';
import { Appointment } from '../../interfaces/appointment';
import { PatientService } from '../../services/patient.service';
@Component({
  selector: 'app-view-appointments',
  standalone: true,
  imports: [AppointmentwidgetComponent, CommonModule],
  templateUrl: './view-appointments.component.html',
  styleUrl: './view-appointments.component.css'
})
export class ViewAppointmentsComponent {

  appointmentList: Appointment[] = [];
  filteredAppointmentList: Appointment[] = [];
  patientService = inject(PatientService);

  constructor(){
    this.appointmentList = this.patientService.getAllAppointments();
    this.filteredAppointmentList = this.appointmentList;
  }
  filterResults(date: string) {
    if(!date) {
    this.filteredAppointmentList = this.appointmentList;
  }
    this.filteredAppointmentList.filter(
      appointment => appointment.date.includes(date));

  }

}
