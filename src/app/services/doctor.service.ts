import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { doclog } from '../models/doclog.model';
import { Router } from '@angular/router';
import { Confirm } from '../models/confirm';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private _loginUrl="http://localhost:8090/doctor/login"
  constructor(private http:HttpClient, private _router:Router) { }
  loginPat(logcred:doclog):Observable<any>{
    return this.http.post<any>(this._loginUrl,logcred)
  }
  loggedIn(){
    return !!localStorage.getItem('docid')
  }
  logoutUser(){
    localStorage.removeItem('docid');
    localStorage.removeItem('docname');
    this._router.navigate(['/doctor'])
  }

  getAllappointments(id:number):Observable<any>{

    return this.http.get('http://localhost:8090/doctor/get_appointment/'+id);
  }

  confirmAppointment(data:Confirm):Observable<any>{
    
    return this.http.post('http://localhost:8090/doctor/confirm_appointment',data);
  }

  cancelAppointment(id:number):Observable<any>{
    return this.http.post('http://localhost:8090/doctor/cancel_appointment/'+id,{});
  }
}
