import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Patient } from '../../models/patient.model';
import { HttpClientModule } from '@angular/common/http';
import { PatauthService } from '../../services/patauth.service';

@Component({
  selector: 'app-patient-registration',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  providers:[PatauthService],
  templateUrl: './patient-registration.component.html',
  styleUrl: './patient-registration.component.css'
})
export class PatientRegistrationComponent implements OnInit{
  patient: Patient = new Patient();
  constructor(private _auth:PatauthService,private _router:Router){}
  ngOnInit(){
  }
  registerPatient():void {
    console.log(this.patient)
    this._auth.registerPat(this.patient).subscribe(
      (response) => {
        localStorage.setItem('pat',response.patientId);
        console.log(response);

        this._router.navigate(['/patient']);
      },
      (error) => {
        console.error(error);
        alert('Either email already exists or your password does not have more than 8 characters or you have not filled all the details. Please contact administrator if problem persists');
      }
    );
  }
}
