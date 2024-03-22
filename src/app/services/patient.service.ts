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
  doctorList: Doctor[] = [{
    id: 1,
    name: 'Dr. John',
    specialization: 'Cardiologist',
    rating: 4.5,
    description: "I am a good doctor. I will take care of your health",
    image: this.baseUrl + 'doctor.jpg'
    
},
{
  id: 2,
  name: 'Dr. Smith',
  specialization: 'Dermatologist',
  rating: 4.5,
  description: "I am a good doctor. I will take care of your health",
  image: this.baseUrl + 'doctor.jpg'
  
},{
  id: 3,
  name: 'Dr. John Smith',
  specialization: 'General Doctor',
  rating: 4.5,
  description: "I am a general doctor. I will take care of your health",
  image: this.baseUrl + 'doctor.jpg'
  
}]

// appointmentsList: Appointment[] = [
//   {id: 1, date: new Date(Date.parse('01-05-2023')), time: '10:00', status: true, description: 'Headache'},
//   {id: 2, date: new Date(Date.parse('01-06-2023')), time: '15:00', status: false, description: 'Cancer'},
//   {id: 3, date: new Date(Date.parse('01-09-2023')), time: '18:00', status: true, description: 'Some other issue'}
// ]
getAllDoctors(): Doctor[] {
  return this.doctorList;
}
getDoctorsById(id: number): Doctor | undefined{
  return this.doctorList.find(doctor => doctor.id === id);
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