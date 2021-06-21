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
  newSite:Site=new Site();
  constructor(private  siteService:SiteService,private router: Router,private region:RegionService,private sub:SubRegionService) { }


  ngOnInit(): void {
    this.region.GetRegions().subscribe(regions => {
      this.regions = regions;
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
console.log(this.newSite.codeSiteKind);
  } 
  SignUp(frm:any){
    this.siteService.SignUp(this.newSite).subscribe(siteName=>{
     //לקבל את התעודת זהות שנכנס עכשיו ולשלוח אותו לאזור האישי 
     this.newSite.nameSite=siteName; 
     if(siteName!="")
      {
        sessionStorage.setItem('companyId',siteName.toString())
        this.router.navigate(['/Election']);
      }
     else 
     console.log("בחר שם אחר שם זה כבר קיים במערכת")
     });
     
    }
  
    }

