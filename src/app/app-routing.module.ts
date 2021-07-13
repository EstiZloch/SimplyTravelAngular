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
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { TripsHistoryComponent } from './components/trips-history/trips-history.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'plan1',component:Plan1Component},

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

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
