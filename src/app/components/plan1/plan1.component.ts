import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { Region } from 'src/shared/models/Region.model';
import { SubRegion } from 'src/shared/models/SubRegion.model';
import { RegionService } from 'src/shared/services/region.service';
import { SubRegionService } from 'src/shared/services/sub-region.service';

@Component({
  selector: 'app-plan1',
  templateUrl: './plan1.component.html',
  styleUrls: ['./plan1.component.css']
})
export class Plan1Component implements OnInit {
  regions:Region[]=[]
  sub_regions:SubRegion[]=[]
  constructor(private region:RegionService,private sub:SubRegionService) { }

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
}
