import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerService } from 'src/shared/services/customer.service';
import { RegionService } from 'src/shared/services/region.service';
import { ReminderService } from 'src/shared/services/reminder.service';
import { ResponseService } from 'src/shared/services/response.service';
import { SiteInTripService } from 'src/shared/services/site-in-trip.service';
import { SiteKindService } from 'src/shared/services/site-kind.service';
import { SiteService } from 'src/shared/services/site.service';
import { SubRegionService } from 'src/shared/services/sub-region.service';
import { TripService } from 'src/shared/services/trip.service';
import { SigninComponent } from './components/signin/signin.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ChartsModule } from 'ng2-charts';
import { SignupComponent } from './components/signup/signup.component';
import { Route } from '@angular/compiler/src/core';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import {MatInputModule} from '@angular/material/input';
import { FormPageComponent } from './components/form-page/form-page.component';
import { StepsComponent } from './components/steps/steps.component';
import { StepsService } from 'src/shared/services/steps.service';
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ForgetPasswordComponent,
    WelcomeComponent,
    FormPageComponent,
    StepsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxMaterialTimepickerModule,
   // NgbModule,
    MatCheckboxModule,
    MatTabsModule,
    ChartsModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [   CustomerService,
    TripService,
    ResponseService,
    ReminderService,
    SiteInTripService,
    SiteKindService,
    SiteService,
    SubRegionService,
    RegionService,
    StepsService
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
