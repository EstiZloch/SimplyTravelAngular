import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { Plan1Component } from './components/plan1/plan1.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


const routes: Routes = [
  {path:'',component:WelcomeComponent,pathMatch:'full'},
    { path: 'LogIn', component: SigninComponent },
    { path: 'SignUp', component: SignupComponent },
    { path: 'ForgetPassword', component: ForgetPasswordComponent },
    {path:'Start',component:StartPageComponent},
    {path:'Plan1',component:Plan1Component}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
