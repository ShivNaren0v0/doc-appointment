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
    this._auth.registerPat(this.patient).subscribe(
      (response) => {
        localStorage.setItem('token',response.patientId);
        console.log(response);

        this._router.navigate(['/patient']);
      },
      (error) => {
        console.error(error);
        alert('Error registering patient');
      }
    );
  }
}
