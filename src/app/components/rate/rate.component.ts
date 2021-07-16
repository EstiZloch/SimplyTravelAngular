import { ElementRef, Input, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Responses } from 'src/shared/models/Responses.model';
import { ResultsService } from 'src/shared/services/results.service';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { ResponseService } from 'src/shared/services/response.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  rates:Responses[]=[]
  show:boolean=false
  currentRate1 = 0;
  currentRate2 = 0;
  currentRate3 = 0;
  index:number=0;
  answer:boolean
  max:number=5;
  @ViewChild('toggleButton') toggleButton: MatButtonToggle;
  @ViewChild('toggleButton1') toggleButton1: MatButtonToggle;
  @Input() siteName:string;
  constructor(private result:ResultsService,private response:ResponseService,private router:Router) {
this.rates= result.GetSitesInTrip()


   }
   closeAlert() {
    this.show=false;
  }
   ngAfterViewInit() {
    setTimeout(() => {
      if(this.rates[this.index].Question4==0)
      {
      this.toggleButton1.checked = true; 
      }
      else
      this.toggleButton.checked = true; 
  
  });

  }
  ngOnInit(): void {
  }
  public changeNumber()
  {
    this.index=this.result.GetNumber2();
  }
  public changeAnswer()
{
    if(this.rates[this.index].Question4==0)
    {
    this.toggleButton1.checked = true; 
    }
    else
    this.toggleButton.checked = true; 
  }
  save()
  {
 
    if( this.toggleButton.checked == true)
    {
    this.rates[this.index].Question4=1;
    }
    else
    this.rates[this.index].Question4=0;
 this.response.Update(this.rates[this.index]).subscribe(sites=>{
this.show=true
 })
  }

}
