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

submitAppointmentRequest(name: string, date: string, time: string, email: string, description: string) {
  
    console.log(`Appointment request received for ${name} on ${date} at ${time} with email ${email}, description: ${description}`);
  

}

getAllAppointments(id: number): Observable<any> {
  return this.httpClient.get('http://localhost:8090/patient/get_appointments/'+id);
}


login(email: string, password: string): boolean {
  return true;
}
}