import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {
  currentRate = 0;
  max:number=5;
  reminders:any=[{remi:"לא לשכוח כובעי שמש ",date:"12/12/2021"},
  {remi:'בטיולים בדרום להגדיל משמעותית את כמות המים',date:"12/01/2021"}];
  Newreminders:any=[{remi:"",date:""},]
  constructor() { }

  ngOnInit(): void {
  }

 onEnter(event:any) { console.log(event.target.value) }
  newReminder(){
    this.Newreminders.push({remi:"",date:""})
  }
  daleteReminder(){
    
    this.Newreminders.splice(-1,1)

  }
}
