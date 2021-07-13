import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SiteDisplay } from 'src/shared/models/SiteDisplay.model';
import { ResultsService } from 'src/shared/services/results.service';
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
  constructor(private siteService:SiteService,private router:Router,private result:ResultsService) {
        this.siteService.GetAllSites().subscribe(sitesList=>{
      this.dataSource = new MatTableDataSource(sitesList);
      this.dataSource.paginator = this.paginator;
      console.log(sitesList[0])
   });


  }
  ngOnInit(): void {
   
  }
  AddSite()
  {
    this.router.navigate(['AddSite']);
    this.siteService.GetAllSites().subscribe(sitesList=>{
      this.dataSource = new MatTableDataSource(sitesList);
      this.dataSource.paginator = this.paginator;
   });
  }
  changeStatus(codeSite:number)
  {
    this.site=new SiteDisplay();
    this.site.CodeSite=codeSite
this.siteService.changeStatus(this.site).subscribe(s=>{
  this.siteService.GetAllSites().subscribe(sitesList=>{
    this.dataSource = new MatTableDataSource(sitesList);
    this.dataSource.paginator = this.paginator;
  });
});

  }
  edit(codeSite:number)
  {
    this.result.SetCode(codeSite);
    this.router.navigate(['AddSite']);
  }

}
