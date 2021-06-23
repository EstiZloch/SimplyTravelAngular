import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trips-history',
  templateUrl: './trips-history.component.html',
  styleUrls: ['./trips-history.component.css']
})
export class TripsHistoryComponent implements OnInit {
  trips:string[]=["נחל שורק 2020",
  'כינרת תשע"ט 2018'];
  constructor() { }

  ngOnInit(): void {
  }
  onClick(event:any) { console.log(event.target) }
}
