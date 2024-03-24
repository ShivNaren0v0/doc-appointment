import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { patlog } from '../../models/patlog.models';
import { PatauthService } from '../../services/patauth.service';
@Component({
  selector: 'app-patient-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  providers:[PatauthService],
  templateUrl: './patient-login.component.html',
  styleUrl: './patient-login.component.css'
})
export class PatientLoginComponent  implements OnInit{
  logcred: patlog=new patlog();
  constructor(private _auth:PatauthService,private _router:Router){}
  ngOnInit(){
  }
  loginPatient():void {
    this._auth.loginPat(this.logcred).subscribe(
      (response) => {
        console.log(response);
        localStorage.setItem('token',response.patientId);
        this._router.navigate(['/patient']);
      },
      (error) => {
        console.error(error);
        alert('Error login patient');
      }
    );
  }

}
