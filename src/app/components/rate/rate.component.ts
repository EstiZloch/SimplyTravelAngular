import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  currentRate1 = 0;
  currentRate2 = 0;
  currentRate3 = 0;
  max:number=5;
  @Input() tripName:string;
  constructor() { }

  ngOnInit(): void {
  }

}
