import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {
  currentRate = 0;
  max:number=5;
  reminders:string[]=["לא לשכוח כובעי שמש ",
  'בטיולים בדרום להגדיל משמעותית את כמות המים'];

  constructor() { }

  ngOnInit(): void {
  }
  onEnter(event:any) { console.log(event.target.value) }
}
