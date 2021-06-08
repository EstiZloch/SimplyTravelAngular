import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StepModel } from '../../../shared/models/step.model';
import { StepsService } from '../../../shared/services/steps.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StepsComponent implements OnInit {
/*steps:[
  { stepIndex: 1, isComplete: false },
  { stepIndex: 2, isComplete: false },
  { stepIndex: 3, isComplete: false },
  { stepIndex: 4, isComplete: false }
];*/
steps: StepModel[];
currentStep: Observable<StepModel>;

  constructor(private service:StepsService) { 
    this.service.getSteps().subscribe( (stepsTemp) => {
    stepsTemp[1];
    this.steps = stepsTemp;
    console.log(this.steps)
   });
   this.currentStep = this.service.getCurrentStep();
  }

  ngOnInit(): void {

  }

}
