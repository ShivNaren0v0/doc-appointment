import { Component,Input } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { RouterModule } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
@Component({
  selector: 'app-docwidget',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './docwidget.component.html',
  styleUrl: './docwidget.component.css'
})
export class DocwidgetComponent {
  @Input() doctor!: Doctor;

}
