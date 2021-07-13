import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ResultsService } from 'src/shared/services/results.service';
import { TripReviewComponent } from '../trip-review/trip-review.component';

@Component({
  selector: 'app-trips-history',
  templateUrl: './trips-history.component.html',
  styleUrls: ['./trips-history.component.css']
})
export class TripsHistoryComponent implements OnInit {
  trips:string[][]=[["1","טיול בטבע"],
["2",'הטיול הרגוע'],
["3",'לחובבי ההיסטוריה שביננו'],
["4",'אתגרי'],
["5",'טיול קלאסי']]
  tripName: string;
  @ViewChildren(TripReviewComponent) viewChildren!: QueryList<TripReviewComponent>;
  constructor(private result:ResultsService) { }

  ngOnInit(): void {
  }
  onClick(res:any,value:any) { 
    this.result.SetCurr(4)
    this.result.SetNumber(value);
     this.tripName=res; 
    this.viewChildren.forEach(element => {
       element.changeNumber();
       element.changePanelOpenState();

     
     })
    }
}
