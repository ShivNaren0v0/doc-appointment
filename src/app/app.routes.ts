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
import { DoctorNavbarComponent } from './components/doctor-navbar/doctor-navbar.component';
import { DoctorHomeComponent } from './components/doctor-home/doctor-home.component';
import { DoctorAppointmentsComponent } from './components/doctor-appointments/doctor-appointments.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { authGuard } from './guard/auth.guard';
import { authdGuard } from './guard/authd.guard';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import path from 'path';
import { DocReviewsComponent } from './components/doc-reviews/doc-reviews.component';
export const routes: Routes = [
    {path: '', component: HomeComponent},

    { path: 'patient', component: PatientComponent, children: [
        { path: '', component: PatientHomeComponent },
        { path: 'patient-dashboard', component: PatientDashboardComponent },
        { path: 'patient-registration', component: PatientRegistrationComponent },
        { path: 'docdetails/:id', component: DocdetailsComponent ,canActivate:[authGuard]},
        {path: 'log-out', redirectTo: 'login', pathMatch: 'full'},
        {path: 'appointments', component: ViewAppointmentsComponent,canActivate:[authGuard]},
        {path: 'login',component: PatientLoginComponent},
        {path: 'review/:id', component: ReviewComponent,canActivate:[authGuard]},
        {path:'reviews',component:DocReviewsComponent}
    ]},
    {path:'doctor',component:DoctorNavbarComponent,children:[
        {path:'',component:DoctorHomeComponent},
        {path:'doctor-appointment',component:DoctorAppointmentsComponent,canActivate:[authdGuard]},
        {path:'doctor-login',component:DoctorLoginComponent},
        {path:'doctor-logout', redirectTo: 'doctor-login', pathMatch: 'full'},
        {path:'doctor-login',component:DoctorLoginComponent}
    ]},
    {path:'admin',component:AdminPageComponent},

    {path: '**', component: NotfoundComponent}
    ];
