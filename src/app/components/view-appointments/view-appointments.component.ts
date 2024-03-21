import { Component, inject } from '@angular/core';
import { AppointmentwidgetComponent } from '../appointmentwidget/appointmentwidget.component';
import { CommonModule } from '@angular/common';
import { Appointment } from '../../interfaces/appointment';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-view-appointments',
  standalone: true,
  imports: [AppointmentwidgetComponent, CommonModule],
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.css']
})
export class ViewAppointmentsComponent {
  appointmentList: Appointment[] = [];
  filteredAppointmentList: Appointment[] = [];
  patientService = inject(PatientService);

  constructor() {
    this.appointmentList = this.patientService.getAllAppointments();
    this.filteredAppointmentList = this.appointmentList;
  }

  filterResults(date: string) {
    let d: Date = new Date(date);
    if (!d.getTime()) { // Check if the date is valid
      console.log("Date not recognized");
      this.filteredAppointmentList = this.appointmentList;
    } else {
      this.filteredAppointmentList = this.appointmentList.filter(
        appointment => new Date(appointment.date).toDateString() === d.toDateString()
      );
    }
  }
}
