import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.css']
})
export class ResponsesComponent implements OnInit {
  responses:string[]=["04/04/2021 נחל שורק",
  '01/05/2019 טיול משפחתי לצפון ',
  "21/08/2017 יציאה נחמדה"];
  tripName:string
  ngOnInit(): void {
  }
  onClick(res:any) {
    this.tripName=res;
     console.log(res)
   }
}
