import { Injectable } from '@angular/core';
import { Doctor } from '../interfaces/doctor';
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor() { }
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
  id: 1,
  name: 'Dr. John Smith',
  specialization: 'General Doctor',
  rating: 4.5,
  description: "I am a general doctor. I will take care of your health",
  image: this.baseUrl + 'doctor.jpg'
  
}]

getAllDoctors(): Doctor[] {
  return this.doctorList;
}
getDoctorsById(id: number): Doctor | undefined{
  return this.doctorList.find(doctor => doctor.id === id);
}

submitAppointmentRequest(name: string, date: string, time: string, email: string, description: string) {
  
    console.log(`Appointment request received for ${name} on ${date} at ${time} with email ${email}, description: ${description}`);
  

}
}