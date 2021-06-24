import { Component, OnInit } from '@angular/core';
import { SiteDisplay } from 'src/shared/models/SiteDisplay.model';
import { SiteService } from 'src/shared/services/site.service';

@Component({
  selector: 'app-all-sites',
  templateUrl: './all-sites.component.html',
  styleUrls: ['./all-sites.component.css']
})
export class AllSitesComponent implements OnInit {
  sites:SiteDisplay[];
  constructor(private siteService:SiteService) {
        this.siteService.GetAllSites().subscribe(sitesList=>{
      this.sites=sitesList;
      console.log(this.sites);
      console.log(this.sites);
   });
  }
  ngOnInit(): void {

  }

}
