import { Routes } from '@angular/router';
import { ReviewComponent } from './components/review/review.component';
import { LoginComponent } from './components/login/login.component';
import { PatientRegistrationComponent } from './components/patient-registration/patient-registration.component';
import { DocdetailsComponent } from './components/docdetails/docdetails.component';
import { PatientDashboardComponent } from './components/patient-dashboard/patient-dashboard.component';
export const routes: Routes = [
  { path: 'review', component: ReviewComponent },
  {path: '', component: LoginComponent},
  {path:'patient/dashboard',component:PatientDashboardComponent},
  {path: 'register', component: PatientRegistrationComponent},
  {path: 'patient/dashboard/docdetail/:id', component: DocdetailsComponent}
];
