import { Component, OnInit } from '@angular/core';
import { SiteDisplay } from 'src/shared/models/SiteDisplay.model';
import { SiteService } from 'src/shared/services/site.service';

@Component({
  selector: 'app-all-sites',
  templateUrl: './all-sites.component.html',
  styleUrls: ['./all-sites.component.css']
})
export class AllSitesComponent implements OnInit {
  site:SiteDisplay=new SiteDisplay();
  
  sites:SiteDisplay[]= []
 headers:string[]=[
 "קוד האתר"
 ,"שם האתר"
 ,"סוג האתר"
 ,"כתובת"
 ,"אזור"
 ,"תת אזור"
 ,"רמת אתגר",
 "גיל מינימלי"
 ,"גיל מקסימלי"
 ,"מספר ליטר מים לנפש"
 ,"חינם/לא בחינם"
 ,"הגעה עצמית/תחבורה ציבורית"
 ,"זמן ממוצע לבילוי"
 ,"פעיל/לא פעיל"]
  
  ;
  constructor(private siteService:SiteService) {
    this.site.CodeSite=1;
    this.site.NameSite="קבר הרשבי";
    this.site.NameSiteKind="קבר";
    this.site.Adress="מירון ישראל";
    this.site.NameSub_Region="הגליל";
    this.site.NameRegion="צפון";
    this.site.ExtraLevel=1;
    this.site.MinAge=0;
    this.site.MaxAge=120;
    this.site.MisLiterWater=1;
    this.site.Free_notFree="חינם";
    this.site.Car_bus="תחבורה ציבורית";
    this.site.TimeSpend=0.5;
    this.site.StatusSite="פעיל";
    this.sites.push(this.site);
  //       this.siteService.GetAllSites().subscribe(sitesList=>{
  //     this.sites=sitesList;
  //  });
  }
  ngOnInit(): void {

  }

}
