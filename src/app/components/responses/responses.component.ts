import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.css']
})
export class ResponsesComponent implements OnInit {
  responses:string[]=["נחל שורק",
  'כינרת תשע"ט'];
  constructor() { }

  ngOnInit(): void {
  }
  onClick(event:any) { console.log(event.target) }
}
