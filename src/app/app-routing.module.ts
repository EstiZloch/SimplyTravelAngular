import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSitesComponent } from './components/all-sites/all-sites.component';
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
    { path: 'LogIn', component: SigninComponent },
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
