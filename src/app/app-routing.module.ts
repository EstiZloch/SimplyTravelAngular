import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSiteComponent } from './components/add-site/add-site.component';
import { AllSitesComponent } from './components/all-sites/all-sites.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { InputMapComponent } from './components/input-map/input-map.component';
import { LoginComponent } from './components/login/login.component';
import { Plan1Component } from './components/plan1/plan1.component';
import { RateComponent } from './components/rate/rate.component';
import { ReminderComponent } from './components/reminder/reminder.component';
import { ResponsesComponent } from './components/responses/responses.component';
import { SignupComponent } from './components/signup/signup.component';
import { TripsHistoryComponent } from './components/trips-history/trips-history.component';
import { TripsResponsesComponent } from './components/trips-responses/trips-responses.component';
import { TripsComponent } from './components/trips/trips.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'plan1',component:Plan1Component},
  { path: 'notes', component: ReminderComponent },
  { path: 'Welcome', component: WelcomeComponent },
  { path: 'AllSite', component: AllSitesComponent },
  { path: 'details', component: CustomerDetailsComponent },
  { path: 'change', component: ChangePasswordComponent },
  { path: 'AddSite', component: AddSiteComponent },
    { path: 'SignUp', component: SignupComponent },
    { path: 'ForgetPassword', component: ForgetPasswordComponent },
    {path:'map',component:InputMapComponent},
    {path:'tripsHistory',component:TripsHistoryComponent},
    {path:'allSites',component:AllSitesComponent},
    {path:'history',component:TripsHistoryComponent},
    {path:'responses',component:ResponsesComponent},
    {path:'tripResponses',component:TripsResponsesComponent},
    {path:'trips',component:TripsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
