import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { doc } from '../../models/doc.model';
import { AdminSerService } from '../../services/admin-ser.service';
@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule,NgFor],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})

export class AdminPageComponent implements OnInit {
  doctors: doc[] = [];
  newDoctor: any = { name: '', spec: '' };
  doctorId=0
  constructor(private adminService: AdminSerService) { }

  ngOnInit() {
    this.getDoctors();
  }

  getDoctors() {
    this.adminService.getDoctors().subscribe((data: any[]) => {
      this.doctors = data;
    });
  }

  createDoctor() {
    this.adminService.createDoctor(this.newDoctor).subscribe(() => {
      this.getDoctors(); // Refresh the list of doctors after creating a new one
      this.newDoctor = { name: '', spec: '' }; // Clear input fields
    });
  }

  deleteDoctor(id: number) {
    this.adminService.deleteDoctor(id).subscribe(() => {
      this.getDoctors(); // Refresh the list of doctors after deleting
    });
  }
}