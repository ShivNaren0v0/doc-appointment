import { Input } from '@angular/core';
import { Component, Inject, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatientService } from '../../services/patient.service';
import Swal from 'sweetalert2';
import { Review } from '../../models/review';
import { Appointment } from '../../models/appointment';
import { DatePipe, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { doctorReview } from '../../models/doctorReview';
@Component({
  selector: 'app-review',
  standalone: true,
  imports: [FormsModule,CommonModule,DatePipe, NgIf],
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  rating = 0;
  reviewText = '';
  rev=new Review();
  doctorReview=new doctorReview();
  appointmentid=0;
  num=0;
  constructor() {
    this.appointmentid = this.route.snapshot.params['id'];
    this.patservice.viewAppointment(Number(this.appointmentid)).subscribe(
      (data)=>{
        console.log(data);
        this.num=data.doctorId;
      }
    );
  }
  patservice=inject(PatientService);

  ngOnInit(): void {
  }

  rate(rating: number): void {
    this.rating = rating;
  }
  
  
  submitReview(): void {
    console.log("no.",this.appointmentid);
    
    this.rev.doctor_ID=this.num;
    this.rev.patient_ID=Number(localStorage.getItem('patid'));
    this.doctorReview.rating=this.rating;
    this.doctorReview.reviewText=this.reviewText;
    this.rev.doctorReview=this.doctorReview;
    console.log(this.rev);
    //console.log('app:',this.appointment);
    this.patservice.postReview(this.rev,this.appointmentid).subscribe(
      (data)=>{
        
        Swal.fire("review confirmed");

      }
    );
    console.log('app id:',this.appointmentid);
    // Send the review to the server
    console.log('Rating:', this.rating);
    console.log('Review:', this.reviewText);
  }
}
