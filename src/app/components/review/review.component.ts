
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  rating = 0;
  reviewText = '';

  constructor() { }

  ngOnInit(): void {
  }

  rate(rating: number): void {
    this.rating = rating;
  }

  submitReview(): void {
    // Send the review to the server
    console.log('Rating:', this.rating);
    console.log('Review:', this.reviewText);
  }
}
