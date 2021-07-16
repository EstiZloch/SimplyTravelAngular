import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ResponseService } from 'src/shared/services/response.service';
import { ResultsService } from 'src/shared/services/results.service';
import { SiteInTripService } from 'src/shared/services/site-in-trip.service';
import { SiteService } from 'src/shared/services/site.service';
import { RateComponent } from '../rate/rate.component';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.css']
})
export class ResponsesComponent implements OnInit {

  responses:string[]
  siteName:string
  @ViewChildren(RateComponent) viewChildren!: QueryList<RateComponent>;
  constructor(private responsesService:ResponseService,private result:ResultsService,private siteService:SiteInTripService){}
  ngOnInit(): void {
    this.siteService.GetNamesSitesInTrip(this.result.GetCodeTrip()).subscribe(sites=>{
      this.responses=sites;
      this.responsesService.GetResponses(this.result.GetCodeTrip()).subscribe(sites=>{
        this.result.SetSitesInTrip(sites)
        })
     })

  }
  onClick(res:string,value:number) {
    this.result.SetNumber2(value);
    this.siteName=res;
    this.viewChildren.forEach(element => {
       element.changeNumber();
       element.changeAnswer();
     })

   }
}
