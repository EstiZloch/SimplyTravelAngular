import { Component, OnInit } from '@angular/core';
import { ResponseService } from 'src/shared/services/response.service';
import { ResultsService } from 'src/shared/services/results.service';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.css']
})
export class ResponsesComponent implements OnInit {
  responses:Response[]
  tripName:string
  constructor(private responsesService:ResponseService,private result:ResultsService){}
  ngOnInit(): void {
this.responsesService.GetResponses(this.result.GetCodeTrip()).subscribe(sites=>{
 this.responses=sites
})
  }
  onClick(res:any) {
    this.tripName=res;
     console.log(res)
   }
}
