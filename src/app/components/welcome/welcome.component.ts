import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StepModel } from '../../../shared/models/step.model';
import { StepsService } from '../../../shared/services/steps.service';
import { Observable } from 'rxjs';
import { ResultsService } from 'src/shared/services/results.service';

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
  constructor(private router:Router,private route:ActivatedRoute,private stepsService: StepsService,public result:ResultsService) { }

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
    this.router.navigate(['complete'],{relativeTo:this.route});
  }
  LogIn(){
        this.router.navigate(['LogIn'],{relativeTo:this.route});
      }
       SignUp(){
        this.router.navigate(['SignUp'],{relativeTo:this.route});
       }
       startPlanning() {
        this.router.navigate(['Start'],{relativeTo:this.route});
     }
     allSite()
     {
      this.router.navigate(['AllSite']);
     }
     details()
     {
      this.router.navigate(['details']);
     }
     changePassword()
     {
      this.router.navigate(['change']);
     }
     startPlan()
     {
       this.result.SetCurr(2);
      this.router.navigate(['plan1']);
     }
     history()
     {
      this.router.navigate(['trips']);
     }
     notes()
     {
      this.router.navigate(['notes']);
     }
     responses()
     {
      this.router.navigate(['tripResponses']);
     }
}
