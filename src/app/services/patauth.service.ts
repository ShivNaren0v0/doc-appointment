import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient.model';
import { patlog } from '../models/patlog.models';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PatauthService {
  private _registerUrl="http://localhost:8090/patient/create_account"
  private _loginUrl="http://localhost:8090/patient/login"
  constructor(private http:HttpClient, private _router:Router) { }
  registerPat(patient: Patient): Observable<any>{
    return this.http.post<any>(this._registerUrl,patient)
  }
  loginPat(logcred:patlog):Observable<any>{
    return this.http.post<any>(this._loginUrl,logcred)
  }
  loggedIn(){
    return !!localStorage.getItem('pat')
  }
  logoutUser(){
    localStorage.removeItem('pat');
    this._router.navigate(['/patient'])
  }
}
