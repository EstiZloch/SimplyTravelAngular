import {AfterViewInit, Component, ContentChildren, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ResultsService } from 'src/shared/services/results.service';
import { TripService } from 'src/shared/services/trip.service';
import { TripsReviewComponent } from '../trips-review/trips-review.component';


@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  trips:string[][]=[]
  tripName: string;
  @ViewChildren(TripsReviewComponent) viewChildren: QueryList<TripsReviewComponent>;
  @ViewChildren(TripsReviewComponent) modelRefList: QueryList<TripsReviewComponent>;
  constructor(private result:ResultsService,private tripsService:TripService) { 
  }

  ngOnInit(): void {

  }
  ngAfterViewInit():void{
    this.tripsService.GetTrips(this.result.GetId()).subscribe(t=>{
      this.trips=t;
      this.result.SetTrips(t);
    });
    this.tripsService.GetTripsDetails(this.result.GetId()).subscribe(trips=>{
      console.log(trips)
      this.result.SetResults1(trips);
    });
  }
  onClick(res:any,value:any) { 
console.log(value)
    this.result.SetNumber1(value);
     this.tripName=res; 
    this.modelRefList.forEach(element => {
       element.changeNumber();
       element.changePanelOpenState();
     })
    }
}

