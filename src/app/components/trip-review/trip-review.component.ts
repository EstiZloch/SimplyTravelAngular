import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Site } from 'src/shared/models/Site.model';
import { SiteDisplay } from 'src/shared/models/SiteDisplay.model';
import { SiteInTripToAdd } from 'src/shared/models/SiteInTripToAdd.model';
import { Trip } from 'src/shared/models/Trip.model';

import { ResultsService } from 'src/shared/services/results.service';
import { SiteInTripService } from 'src/shared/services/site-in-trip.service';
import { SiteService } from 'src/shared/services/site.service';
import { TripService } from 'src/shared/services/trip.service';

@Component({
  selector: 'app-trip-review',
  templateUrl: './trip-review.component.html',
  styleUrls: ['./trip-review.component.css']
})
export class TripReviewComponent implements OnInit {
  panelOpenState = false;
  name:string
  DisplayName:boolean=false
  show:boolean=false
  newTrip:Trip=new Trip()
  newSiteInTrip:SiteInTripToAdd=new SiteInTripToAdd();
  index:number;
  enableOneTime:boolean=false
  idCus:number=this.result.GetId()
  favoriteEnable:boolean=false
  site:SiteDisplay[]
  // Sites1:string[]=["נחל יגור","חי פארק","נחל הקיבוצים","טופ מנגו"]
  // Sites2:string[]=["כינרת","אקוה כיף"]
  // Sites3:string[]=["רמבם","רשבי"]
  // Sites4:string[]=["צלילה אילת","מכתשים"]
  // Sites5:string[]=["נבי סמואל","כותל"]
  // sites:string[][]=[this.Sites1,this.Sites2,this.Sites3,this.Sites4,this.Sites5]
  sites:string[][]
  @Input() tripName:string;
  onInitialized = new EventEmitter<TripReviewComponent>();

  constructor(private result:ResultsService,private router:Router,private tripService:TripService,private siteInTrip:SiteInTripService,private siteService:SiteService) 
  { 
      this.sites=result.GetResults();
  }
  closeAlert() {
    this.show=false;
  }
  ngOnInit(): void {
    this.index=this.result.GetNumber();
  }
  onClick(event:any) { console.log(event.target) }
 public changeNumber()
{
  this.index=this.result.GetNumber();
}
public changePanelOpenState()
{
  this.panelOpenState=false
}
AddFavorite()
{
  this.DisplayName = !this.DisplayName;
}
  AddFavoriteWithName()
  {
    this.show=true;
    this.favoriteEnable = !this.favoriteEnable;;
    this.enableOneTime=false
    console.log(this.enableOneTime)
    this.newTrip.IdCustomer=this.idCus;
this.newTrip.NameTrip=this.name

  this.tripService.AddTrip(this.newTrip).subscribe(tripId=>{  this.sites[this.index-1].forEach(element => {
    this.newSiteInTrip.CodeTrip=tripId
    this.newSiteInTrip.NameSite=element
    this.siteInTrip.AddSiteInTrip(this.newSiteInTrip).subscribe()

  });});
  }
  comeBack()
  {
    this.DisplayName=false
    this.enableOneTime = false;
    console.log(this.enableOneTime)
  }
DisplayTripDetail()
{
  this.siteService.GetSiteDetails(this.sites[this.index-1]).subscribe(details=>{
    console.log(details)
    this.site=details
    
  });
}



}
 



