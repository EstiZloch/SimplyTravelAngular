import { Component, OnInit } from '@angular/core';
import { ResultsService } from 'src/shared/services/results.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public result:ResultsService){}

  Id:number
  ngOnInit(): void {
  
    document.body.dir = 'rtl' ;
    this.Id=this.result.GetId()
    console.log(this.Id)
    console.log('hi')
  }
  title = 'simply';
}