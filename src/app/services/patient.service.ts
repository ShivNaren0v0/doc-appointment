import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor';
import { Appointment } from '../models/appointment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient) { }
  readonly baseUrl = 'assets/';
  

getAllDoctors(): Observable<any> {
  return this.httpClient.get('http://localhost:8090/Doctor')
}
getDoctorsById(id: number): Observable<any>{
  return this.httpClient.get('http://localhost:8090/Doctor/'+id)
}

submitAppointmentRequest(appointment:Appointment): Observable<any> {
  console.log(appointment);
  return this.httpClient.post('http://localhost:8090/appointment', appointment);                                                  
  
}

getAllAppointments(id: number): Observable<any> {

  return this.httpClient.get('http://localhost:8090/patient/get_appointments/'+id);
}

}