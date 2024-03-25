import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { doclog } from '../models/doclog.model';
import { Router } from '@angular/router';
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
    return !!localStorage.getItem('token')
  }
  logoutUser(){
    localStorage.removeItem('token');
    this._router.navigate(['/doctor'])
  }
}
