import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/shared/models/Customer.model';
import { Region } from 'src/shared/models/Region.model';
import { SubRegion } from 'src/shared/models/SubRegion.model';
import { RegionService } from 'src/shared/services/region.service';
import { SiteService } from 'src/shared/services/site.service';
import { SubRegionService } from 'src/shared/services/sub-region.service';

@Component({
  selector: 'app-plan1',
  templateUrl: './plan1.component.html',
  styleUrls: ['./plan1.component.css']
})
export class Plan1Component implements OnInit {
  regions:Region[]=[]
  sub_regions:SubRegion[]=[]
  newCustomer:Customer=new Customer()
  favoriteSeason: string = '1';
min:number;
max:number;
code:number;
address:string;
half:'1';
carOrBus:boolean;
  constructor(private region:RegionService,private sub:SubRegionService,private site:SiteService,private router:Router) { }

  ngOnInit(): void {
    this.region.GetRegions().subscribe(regions => {
      this.regions = regions;
     });
}
  selectType(region:string)
  {
this.sub.GetSubRegions(region).subscribe(sub => {
  this.sub_regions = sub;
 });
  } 
  public AddressChange(address: any) {
    //setting address from API to local variable
     this.address=String(address.formatted_address);
  }
  selectSubRegion(value:any)
  {
this.code=value;
  } 
  selectRegionType(region:string)
  {
this.sub.GetSubRegions(region).subscribe(sub => {
  console.log(this.sub_regions)
  this.sub_regions = sub;
 });
  } 
PlanWith()
{

  if(this.favoriteSeason=='1')
  this.carOrBus=true
  else
  this.carOrBus=false
 if(this.half=='1')
  this.site.Plan(this.code,this.min,this.max,this.address,false,this.carOrBus).subscribe(sub => {
    console.log(this.sub)
   });
   else
   this.site.Plan(this.code,this.min,this.max,this.address,true,this.carOrBus).subscribe(sub => {
    console.log(sub)
   });
   this.router.navigate(['/tripsHistory']);
}
PlanWithout()
{
    this.site.Plan(-1,0,0,this.address,true,true).subscribe(sub => {
      this.router.navigate(['/tripsHistory']);
     });
console.log("dxfcgv")

}
}
