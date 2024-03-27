import { Component, inject } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { NgFor,NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
interface DoctorReview {
  id: number;
  doctor: {
    name: string;
  };
  patient: {
    name: string;
  };
  rating: number;
  reviewText: string;
}
@Component({
  selector: 'app-doc-reviews',
  standalone: true,
  imports: [NgFor,NgIf,FormsModule],
  templateUrl: './doc-reviews.component.html',
  styleUrl: './doc-reviews.component.css'
})
export class DocReviewsComponent {
  doctorReviews!: DoctorReview[];
  filteredReviews: DoctorReview[] = [];
  searchQuery: string = '';

  constructor(private patientService: PatientService) {
    this.patientService.getAllreviews().subscribe((data) => {
      this.doctorReviews = data;
      this.filteredReviews = [...this.doctorReviews]; // Initialize filteredReviews with all reviews
    });
  }

  searchDoctor() {
    if (this.searchQuery.trim() !== '') {
      this.filteredReviews = this.doctorReviews.filter(review =>
        review.doctor.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredReviews = [...this.doctorReviews];
    }
  }
}
