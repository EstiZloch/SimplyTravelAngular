import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-review',
  templateUrl: './trip-review.component.html',
  styleUrls: ['./trip-review.component.css']
})
export class TripReviewComponent implements OnInit {
  sites:string[]=["חוף כינרת",
  'קבר רשב"י',
  'מסעדת בשר וגריל טבריה'];
  constructor() { }

  ngOnInit(): void {
  }
  onClick(event:any) { console.log(event.target) }
}
