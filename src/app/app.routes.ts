import { Routes } from '@angular/router';
import { ReviewComponent } from './components/review/review.component';
import { LoginComponent } from './components/login/login.component';
import { PatientRegistrationComponent } from './components/patient-registration/patient-registration.component';
export const routes: Routes = [
  { path: 'review', component: ReviewComponent },
  {path: '', component: LoginComponent},
  {path: 'register', component: PatientRegistrationComponent}
];
