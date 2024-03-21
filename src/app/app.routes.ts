import { Routes } from '@angular/router';
import { ReviewComponent } from './components/review/review.component';
import { LoginComponent } from './components/login/login.component';
import { PatientRegistrationComponent } from './components/patient-registration/patient-registration.component';
import { DocdetailsComponent } from './components/docdetails/docdetails.component';
import { PatientDashboardComponent } from './components/patient-dashboard/patient-dashboard.component';
import { PatientComponent } from './components/patient/patient.component';
export const routes: Routes = [
    {path: '', component: LoginComponent},

    { path: 'patient', component: PatientComponent, children: [
        { path: 'patient-dashboard', component: PatientDashboardComponent },
        { path: 'patient-registration', component: PatientRegistrationComponent },
        { path: 'docdetails/:id', component: DocdetailsComponent },
        {path: 'log-out', redirectTo: '/', pathMatch: 'full'}
    ]},

];
