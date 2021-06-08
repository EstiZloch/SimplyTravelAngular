import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StepModel } from '../../../shared/models/step.model';
import { StepsService } from '../../../shared/services/steps.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  subscribe:any;
  
  steps: Observable<StepModel[]>;
  currentStep: Observable<StepModel>;
  
  @Input() step: StepModel;
  constructor(private router:Router,private stepsService: StepsService) { }

  ngOnInit(): void {

  }

  onStepClick() {
     // this.step.isComplete = true;
        if (!this.stepsService.isLastStep()) {
          this.stepsService.moveToNextStep();
        }
         else {
          this.onSubmit();
  }
}
  onSubmit(): void {
    this.router.navigate(['/complete']);
  }
  LogIn(){
   // sessionStorage.setItem('enter','3')
        this.router.navigate(['/LogIn']);
      }
       SignUp(){
   // sessionStorage.setItem('enter','3')
        this.router.navigate(['/SignUp']);
       }
}
