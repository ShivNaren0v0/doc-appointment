import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminSerService {

  private baseUrl = 'http://localhost:8090';

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8090/Doctor');
  }

  getDoctorById(id: string): Observable<any> {
    return this.http.get<any>('http://localhost:8090/Doctor/${id}');
  }

  createDoctor(newDoctor: any): Observable<any> {
    return this.http.post<any>('http://localhost:8090/addDoctor', newDoctor);
  }

  deleteDoctor(id: number): Observable<any> {
    return this.http.delete<any>('http://localhost:8090/Doctor/{id}');
  }
}
