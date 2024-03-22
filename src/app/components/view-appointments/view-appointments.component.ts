import { Component, inject } from '@angular/core';
import { AppointmentwidgetComponent } from '../appointmentwidget/appointmentwidget.component';
import { CommonModule } from '@angular/common';
import { Appointment } from '../../models/appointment';
import { PatientService } from '../../services/patient.service';
import { error } from 'console';

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
    this.patientService.getAllAppointments().subscribe(
      (data)=>{
        this.appointmentList = data;
        this.filteredAppointmentList = data;
        console.log(this.appointmentList);
      },
      (err)=>{console.log(err);},
      ()=>{
        console.log("Completed");
      }
    )
  }

  filterResults(date: string) {
    let d: Date = new Date(date);
    if (!d.getTime()) { // Check if the date is valid
      console.log("Date not recognized");
      this.filteredAppointmentList = this.appointmentList;
    } else {
      this.filteredAppointmentList = this.appointmentList.filter(
        appointment => appointment.date === d.toDateString()
      );
    }
  }
}
