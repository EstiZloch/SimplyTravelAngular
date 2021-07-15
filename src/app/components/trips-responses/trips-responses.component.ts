import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultsService } from 'src/shared/services/results.service';
import { TripService } from 'src/shared/services/trip.service';

@Component({
  selector: 'app-trips-responses',
  templateUrl: './trips-responses.component.html',
  styleUrls: ['./trips-responses.component.css']
})
export class TripsResponsesComponent implements OnInit {
  currentRate = 0;
  max:number=5;
  trips:string[][]=[]
  myDate = new Date();
  i:number=0
  disableFalse:boolean= false
  constructor(private trip:TripService,private result:ResultsService,private router:Router) { }

  ngOnInit(): void {
    this.trip.GetTrips(this.result.GetId()).subscribe(trips=>{
      this.trips=trips
    })

  }

 tripReview(code:string) {
   this.result.SetCodeTrip(Number(code))
  this.router.navigate(['responses']);
 }


}
