import { Component,inject } from '@angular/core';
import { DocwidgetComponent } from '../docwidget/docwidget.component';
import { CommonModule } from '@angular/common';
import { Doctor } from '../../interfaces/doctor';
import { PatientService } from '../../services/patient.service';
@Component({
  selector: 'app-patient-dashboard',
  standalone: true,
  imports: [DocwidgetComponent,CommonModule,],
  templateUrl: './patient-dashboard.component.html',
  styleUrl: './patient-dashboard.component.css'
})
export class PatientDashboardComponent {

  readonly baseUrl = 'assets/';
  doctorList: Doctor[] = [];
  filteredDoctorList: Doctor[] = [];
  patientService = inject(PatientService);
  constructor() {
    this.doctorList = this.patientService.getAllDoctors();
    this.filteredDoctorList = this.doctorList;
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredDoctorList = this.doctorList;
      return;
    }
  
    this.filteredDoctorList = this.doctorList.filter(
      doctor => doctor?.specialization.toLowerCase().includes(text.toLowerCase())
    );
  }
  


}
