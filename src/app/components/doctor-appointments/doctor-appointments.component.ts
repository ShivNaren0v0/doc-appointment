import { Component,inject } from '@angular/core';
import { DocAppointmentWidgetComponent } from '../doc-appointment-widget/doc-appointment-widget.component';
import { NgFor, NgIf } from '@angular/common';
import { Appointment } from '../../models/appointment';
import { DoctorService } from '../../services/doctor.service';
@Component({
  selector: 'app-doctor-appointments',
  standalone: true,
  imports: [DocAppointmentWidgetComponent,NgIf,NgFor],
  templateUrl: './doctor-appointments.component.html',
  styleUrl: './doctor-appointments.component.css'
})
export class DoctorAppointmentsComponent {
  appointmentList: Appointment[] = [];
  filteredAppointmentList: Appointment[] = [];
  doctorService = inject(DoctorService);
  constructor() {
    this.doctorService.getAllappointments(Number(localStorage.getItem('token'))).subscribe(
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