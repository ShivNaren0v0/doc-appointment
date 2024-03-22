import { Routes } from '@angular/router';
import { ReviewComponent } from './components/review/review.component';
import { HomeComponent } from './components/home/home.component';
import { PatientRegistrationComponent } from './components/patient-registration/patient-registration.component';
import { DocdetailsComponent } from './components/docdetails/docdetails.component';
import { PatientDashboardComponent } from './components/patient-dashboard/patient-dashboard.component';
import { PatientComponent } from './components/patient/patient.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ViewAppointmentsComponent } from './components/view-appointments/view-appointments.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { PatientHomeComponent } from './components/patient-home/patient-home.component';
export const routes: Routes = [
    {path: '', component: HomeComponent},

    { path: 'patient', component: PatientComponent, children: [
        { path: '', component: PatientHomeComponent },
        { path: 'patient-dashboard', component: PatientDashboardComponent },
        { path: 'patient-registration', component: PatientRegistrationComponent },
        { path: 'docdetails/:id', component: DocdetailsComponent },
        {path: 'log-out', redirectTo: 'login', pathMatch: 'full'},
        {path: 'appointments', component: ViewAppointmentsComponent},
        {path: 'login',component: PatientLoginComponent}
    ]},

    
    {path: '**', component: NotfoundComponent}
    ];
