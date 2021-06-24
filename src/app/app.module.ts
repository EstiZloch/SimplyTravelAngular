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
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
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
import { OptionsCustomerComponent } from './components/options-customer/options-customer.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { Plan1Component } from './components/plan1/plan1.component';
import { CommonModule } from '@angular/common';
import { BrowserModule }from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatFormField } from '@angular/material/form-field';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { InputMapComponent } from './components/input-map/input-map.component';
import { AddSiteComponent } from './components/add-site/add-site.component';
import { LoginComponent } from './components/login/login.component';
import { ReminderComponent } from './components/reminder/reminder.component';
import { ResponsesComponent } from './components/responses/responses.component';
import { RateComponent } from './components/rate/rate.component';
import { TripsHistoryComponent } from './components/trips-history/trips-history.component';
import { TripReviewComponent } from './components/trip-review/trip-review.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AllSitesComponent } from './components/all-sites/all-sites.component';

@NgModule({
  
  imports: [
    BrowserModule,
FormsModule,
CommonModule,
AppRoutingModule,
HttpClientModule,
ReactiveFormsModule,
MaterialModule,
BrowserAnimationsModule,
    NgxMaterialTimepickerModule,
    NgbModule,
    MatCheckboxModule,
    MatTabsModule,
    ChartsModule,
    GooglePlaceModule
  ],
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,LoginComponent,
    ForgetPasswordComponent,
    WelcomeComponent,
    FormPageComponent,
    StepsComponent,
    OptionsCustomerComponent,
    StartPageComponent,
    Plan1Component,
    InputMapComponent,
    AddSiteComponent,
    ReminderComponent,
    ResponsesComponent,
    RateComponent,
    TripsHistoryComponent,
    TripReviewComponent,
    CustomerDetailsComponent,
    ChangePasswordComponent,
    AllSitesComponent
  ],
  providers: [   
    CustomerService,
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
