import { Component, Input } from '@angular/core';
import { Appointment } from '../../interfaces/appointment';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-appointmentwidget',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './appointmentwidget.component.html',
  styleUrl: './appointmentwidget.component.css'
})
export class AppointmentwidgetComponent {
@Input() appointment!: Appointment;
}
