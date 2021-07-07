import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
  displayedColumns:string[]=[
"שם האתר"
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
 ,"פעיל/לא פעיל",
"שנה סטטוס",
"ערוך"]
dataSource:any

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private siteService:SiteService) {
        this.siteService.GetAllSites().subscribe(sitesList=>{
      // this.sites=sitesList;
      // console.log(sitesList)
      // console.log(this.sites)
      this.dataSource = new MatTableDataSource(sitesList);
      this.dataSource.paginator = this.paginator;
   });
   console.log(this.sites)

  }
  ngOnInit(): void {
   
  }
}
