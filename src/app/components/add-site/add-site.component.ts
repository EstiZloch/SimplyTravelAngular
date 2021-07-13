import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { Router } from '@angular/router';
import { Region } from 'src/shared/models/Region.model';
import { Site } from 'src/shared/models/Site.model';
import { SubRegion } from 'src/shared/models/SubRegion.model';
import { RegionService } from 'src/shared/services/region.service';
import { ResultsService } from 'src/shared/services/results.service';
import { SiteService } from 'src/shared/services/site.service';
import { SubRegionService } from 'src/shared/services/sub-region.service';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.css'],

})
export class AddSiteComponent implements OnInit {
  regions:Region[]=[]
  sub_regions:SubRegion[]=[]
  car_bus: string = '1';
  free_not: string = '1';
  season: string = '0';
  favoriteSeason: string = '1';
  buttonText="הוסף"
  check1:boolean
  check2:boolean
  extraLevel:number=0
  newSite:Site=new Site();
    options={
      componentRestrictions:{
        
        country:["IL"],
        language:["Hebrew"]
        
      }

      }
    title = 'rou';
    @ViewChild('selectSub') mySelect: MatSelect;
  constructor(private  siteService:SiteService,private router: Router,private region:RegionService,private sub:SubRegionService,private result:ResultsService) {
    this.region.GetRegions().subscribe(regions => {
      this.regions = regions;

     });

    if(this.result.GetCode()!=-1)
    {
    this.buttonText="עדכן"
    this.siteService.GetSiteDetailsByCode(this.result.GetCode()).subscribe(siteDetails=>{
this.newSite=siteDetails
      if(siteDetails.Car_bus)
      this.check1=true
      else
      this.check1=false
      if(siteDetails.Free_notFree)
      this.check2=true
      else
      this.check2=false
      this.extraLevel=Number(siteDetails.ExtraLevel)
    })
    }
   }
  formatLabel(value: number) {
    let lavels=['קל','בינוני','קשה']
    if (value >= 1) {
      return lavels[(value-1)]
    }

    return 'בחר רמה';
    
  }
  public selectExtra(value:any)
  {
this.newSite.ExtraLevel=value;
  }
  public AddressChange(address: any) {
    //setting address from API to local variable
     this.newSite.Adress=String(address.formatted_address);
  }
  ngOnInit(): void {

     this.newSite.StatusSite=true;

  }
  AddSite(){
    if(this.car_bus=="1")
    this.newSite.Car_bus=true;
    else    
    this.newSite.Car_bus=false;
    if(this.free_not=="1")
    this.newSite.Free_notFree=true;
    else    
    this.newSite.Free_notFree=false;
    this.newSite.StatusSite=true;
    this.siteService.AddSite(this.newSite).subscribe(nameSite=>{
     //לקבל את התעודת זהות שנכנס עכשיו ולשלוח אותו לאזור האישי 
     this.newSite.NameSite=nameSite; 
     if(nameSite!="")
      {
        console.log("האתר הוסף בהצלחה")
      }
     else 
     console.log("בחר שם אחר אתר זה כבר קיים במערכת")
     });
     this.router.navigate(['AllSite']);
    }
  selectRegionType(region:string)
  {

this.sub.GetSubRegions(region).subscribe(sub => {
  this.sub_regions = sub;
 });
console.log(this.mySelect)
 this.mySelect._elementRef.nativeElement.checked=3
 console.log(this.mySelect)
  } 
  selectTypeSite(value:string)
  {
this.newSite.CodeSiteKind=Number(value);
this.siteService.GetMin(Number(value)).subscribe(min => {
  this.newSite.MinAge = min;
 });
 this.siteService.GetMax(Number(value)).subscribe(max => {
  this.newSite.MaxAge = max;
 });
 this.siteService.GetMisLiter(Number(value)).subscribe(liter => {
  this.newSite.MisLiterWater = liter;
 });
 this.siteService.GetSpendTime(Number(value)).subscribe(time => {
  this.newSite.TimeSpend = time;
 });
  } 
  Extra(value:any)
  {
this.newSite.ExtraLevel=Number(value);
  } 
  Free_NotFree(value:string)
  {
    if(value=="0")
this.newSite.Free_notFree=true;
else
this.newSite.Free_notFree=false;
  } 
  Car_Bus(value:string)
  {
    if(value=="0")
this.newSite.Car_bus=true;
else
this.newSite.Car_bus=false;
  } 
  onItemChange(value:any){
    console.log(value)
 }
  selectSubRegion(value:string)
  {
this.newSite.CodeSub_Region=Number(value);
  } 
  UpdateSite()
    {
      this.siteService.UpdateSite(this.newSite).subscribe(nameSite=>{});
      this.router.navigate(['AllSite']);
    }
  
  
    }

