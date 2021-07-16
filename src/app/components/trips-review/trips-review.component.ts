import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SiteDisplay } from 'src/shared/models/SiteDisplay.model';
import { SiteInTripToAdd } from 'src/shared/models/SiteInTripToAdd.model';
import { Trip } from 'src/shared/models/Trip.model';
import { ResponseService } from 'src/shared/services/response.service';
import { ResultsService } from 'src/shared/services/results.service';
import { SiteInTripService } from 'src/shared/services/site-in-trip.service';
import { SiteService } from 'src/shared/services/site.service';
import { TripService } from 'src/shared/services/trip.service';

@Component({
  selector: 'app-trips-review',
  templateUrl: './trips-review.component.html',
  styleUrls: ['./trips-review.component.css']
})
export class TripsReviewComponent implements OnInit {
  panelOpenState = false;
  name:string
  DisplayName:boolean=false
  show:boolean=false
  newTrip:Trip=new Trip()
  newSiteInTrip:SiteInTripToAdd=new SiteInTripToAdd();
  index:number=0;
  enableOneTime:boolean=false
  idCus:number=this.result.GetId()
  favoriteEnable:boolean=false
  site:SiteDisplay[]
  sites:string[][]
  @Input() tripName:string;
  onInitialized = new EventEmitter<TripsReviewComponent>();

  constructor(private responses:ResponseService,private result:ResultsService,private router:Router,private tripService:TripService,private siteInTrip:SiteInTripService,private siteService:SiteService) 
  {
    this.sites=result.GetResults1();
   }

  closeAlert() {
    this.show=false;
  }
  ngOnInit(): void {
    this.index=this.result.GetNumber1();
  }
  onClick(event:any) { console.log(event.target) }
 public changeNumber()
{
  this.index=this.result.GetNumber1();
}
public changePanelOpenState()
{
  this.panelOpenState=false
}
AddFavorite()
{ 

  this.result.SetCodeTrip(Number(this.result.GetTrips()[this.index][0]));
  this.router.navigate(['responses']);

 
}



DisplayTripDetail()
{
  this.siteService.GetSiteDetails(this.sites[this.index]).subscribe(details=>{
    this.site=details
  });
}
comeBack()
{
  this.show=false
}


}
