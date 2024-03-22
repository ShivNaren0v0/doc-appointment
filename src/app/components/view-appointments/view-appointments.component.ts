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
    this.patientService.getAllAppointments(1).subscribe(
      (data)=>{
        this.appointmentList = data;
        this.filteredAppointmentList = data;
      }
    )
  }

  filterResults(date: string) {
    try {
        // Parse the input date string
        const inputDate = new Date(date);
        if (isNaN(inputDate.getTime())) {
            console.log("Date not recognized");
            this.filteredAppointmentList = this.appointmentList;
        } else {
            // Filter appointments based on the input date
            this.filteredAppointmentList = this.appointmentList.filter(
                appointment => {
                    if (appointment.date) {
                        const appointmentDate = new Date(appointment.date);
                        return (
                            appointmentDate.getDate() === inputDate.getDate() &&
                            appointmentDate.getMonth() === inputDate.getMonth() &&
                            appointmentDate.getFullYear() === inputDate.getFullYear()
                        );
                    }
                    return false;
                }
            );
        }
    } catch (error) {
        console.error("Error filtering appointments:", error);
        this.filteredAppointmentList = this.appointmentList;
    }
}
}