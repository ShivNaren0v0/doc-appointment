import { Component,inject } from '@angular/core';
import { Input } from '@angular/core';
import { Appointment } from '../../models/appointment';
import { DatePipe, NgIf } from '@angular/common';
import { DoctorService } from '../../services/doctor.service';
import { Confirm } from '../../models/confirm';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-doc-appointment-widget',
  standalone: true,
  imports: [DatePipe,NgIf],
  templateUrl: './doc-appointment-widget.component.html',
  styleUrl: './doc-appointment-widget.component.css'
})
export class DocAppointmentWidgetComponent {

@Input() appointment!: Appointment;
cancel: boolean = false;
doctorService = inject(DoctorService);
confirmapmt = new Confirm(Number(this.appointment?.id),200);
confirmappointment(id?:number):void {
  console.log(this.confirmapmt);
  this.confirmapmt.appointmentId = Number(id);
  this.doctorService.confirmAppointment(this.confirmapmt).subscribe(
    
    (data)=> {
      console.log(this.confirmapmt);
      console.log(data);
    Swal.fire("Appointment confirmed");}
  );

  
}
cancelAppointment(id?:number):void {
  console.log(this.confirmapmt.appointmentId)
  this.doctorService.cancelAppointment(Number(id)).subscribe(
    (data)=>{console.log(data); 
    Swal.fire("Appointment cancelled");
    }
  );
  this.cancel = true;
}

}


