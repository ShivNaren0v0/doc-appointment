import { Component,OnInit,inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { doclog } from '../../models/doclog.model';
import { authdGuard } from '../../guard/authd.guard';
import { DoctorService } from '../../services/doctor.service';
@Component({
  selector: 'app-doctor-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  providers:[DoctorService],
  templateUrl: './doctor-login.component.html',
  styleUrl: './doctor-login.component.css'
})
export class DoctorLoginComponent implements OnInit{
  logcred: doclog=new doclog();
  _auth=inject(DoctorService);
  constructor(private _router:Router){}
  ngOnInit(){
  }
  loginDoctor():void {
    this._auth.loginPat(this.logcred).subscribe(
      (response) => {
        console.log(response);
        localStorage.setItem('doc',response.docId);
        this._router.navigate(['/doctor']);
      },
      (error) => {
        console.error(error);
        alert('Error login doctor');
      }
    );

}}
