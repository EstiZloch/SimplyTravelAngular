import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Site } from 'src/app/shared/models/Site.model';
import { Region } from 'src/shared/models/Region.model';
import { SubRegion } from 'src/shared/models/SubRegion.model';
import { RegionService } from 'src/shared/services/region.service';
import { SiteService } from 'src/shared/services/site.service';
import { SubRegionService } from 'src/shared/services/sub-region.service';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.css']
})
export class AddSiteComponent implements OnInit {
  regions:Region[]=[]
  sub_regions:SubRegion[]=[]
  car_bus: string = '1';
  free_not: string = '1';
  season: string = '0';
  newSite:Site=new Site();
    options={
      componentRestrictions:{
        
        country:["IL"],
        language:["Hebrew"]
        
      }

      }
    title = 'rou';

  constructor(private  siteService:SiteService,private router: Router,private region:RegionService,private sub:SubRegionService) { }

  public AddressChange(address: any) {
    //setting address from API to local variable
     this.newSite.adress=String(address.formatted_address);
console.log(this.newSite.adress)
  }
  ngOnInit(): void {
    this.region.GetRegions().subscribe(regions => {
      this.regions = regions;
     });
     this.newSite.statusSite=true;
  }
  
  AddSite(frm:any){
    console.log(this.season)
    if(this.car_bus=="1")
    this.newSite.car_bus=true;
    else    
    this.newSite.car_bus=false;
    if(this.free_not=="1")
    this.newSite.free_notFree=true;
    else    
    this.newSite.free_notFree=false;
    this.siteService.AddSite(this.newSite).subscribe(nameSite=>{
     //לקבל את התעודת זהות שנכנס עכשיו ולשלוח אותו לאזור האישי 
     this.newSite.nameSite=nameSite; 
     if(nameSite!="")
      {
        console.log("האתר הוסף בהצלחה")
      }
     else 
     console.log("בחר שם אחר אתר זה כבר קיים במערכת")
     });
     
    }
  selectRegion(region:string)
  {
this.sub.GetSubRegions(region).subscribe(sub => {
  this.sub_regions = sub;
 });
  } 
  selectTypeSite(value:string)
  {
this.newSite.codeSiteKind=Number(value);
this.siteService.GetMin(Number(value)).subscribe(min => {
  this.newSite.minAge = min;
 });
 this.siteService.GetMax(Number(value)).subscribe(max => {
  this.newSite.maxAge = max;
 });
 this.siteService.GetMisLiter(Number(value)).subscribe(liter => {
  this.newSite.misLiterWater = liter;
 });
 this.siteService.GetSpendTime(Number(value)).subscribe(time => {
  this.newSite.timeSpend = time;
 });
  } 
  Extra(value:string)
  {
this.newSite.extraLevel=Number(value);
  } 
  Free_NotFree(value:string)
  {
    if(value=="0")
this.newSite.free_notFree=true;
else
this.newSite.free_notFree=false;
  } 
  Car_Bus(value:string)
  {
    if(value=="0")
this.newSite.car_bus=true;
else
this.newSite.car_bus=false;
  } 
  onItemChange(value:any){
    console.log(value)
 }
  SubRegion(value:string)
  {
this.newSite.codeSub_Region=Number(value);
  } 

  
    }

