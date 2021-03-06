import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReminderDisplay } from 'src/shared/models/ReminderDisplay.model';
import { ReminderService } from 'src/shared/services/reminder.service';
import { ResultsService } from 'src/shared/services/results.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css'],
  providers: [DatePipe]
})
export class ReminderComponent implements OnInit {
  currentRate = 0;
  max:number=5;
  codeEvent:number
  // reminders:any=[{remi:"לא לשכוח כובעי שמש ",date:"12/12/2021"},
  // {remi:'בטיולים בדרום להגדיל משמעותית את כמות המים',date:"12/01/2021"}];
  reminders:ReminderDisplay[]=[]
  myDate = new Date();
  i:number=0
  Newreminders:any=[{remi:"",date:""},]
reminderDisplay:ReminderDisplay=new ReminderDisplay();
// firstTime:boolean=true
  constructor(private reminder:ReminderService,private result:ResultsService,private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.reminder.GetReminders(this.result.GetId()).subscribe
    (
      r=>{
      r.forEach(element => {
        this.i++;
        this.reminderDisplay=new ReminderDisplay();
        this.reminderDisplay.CodeRemainder=element.CodeRemainder;
        this.reminderDisplay.describe=element.Describe?.split("*")[0];
        this.reminderDisplay.date=element.Describe?.split("*")[1];
        this.reminders.push(this.reminderDisplay);
      });

    })
  }

 onEnter(event:any,reminder:ReminderDisplay) {

debugger;

this.reminders.forEach(element => {
  if(element.CodeRemainder==reminder.CodeRemainder)
  element.describe=event.target.value;
  this.codeEvent=event.keyCode
});

 }
 onEnterNew(event:any) {
   
 


      this.reminderDisplay=new ReminderDisplay();
      this.reminderDisplay.CodeRemainder=this.i++
      this.reminderDisplay.describe=event.target.value;
      this.reminderDisplay.date = this.datePipe.transform(this.myDate, 'yyyy-MM-dd')!;
      this.reminders.push(this.reminderDisplay)




   }
  newReminder(){
    debugger;
    this.reminderDisplay=new ReminderDisplay();
    this.reminderDisplay.CodeRemainder=this.i++
    this.reminderDisplay.describe="הכנס תזכורת חדשה"
    this.reminderDisplay.date = this.datePipe.transform(this.myDate, 'yyyy-MM-dd')!;
    this.reminders.push(this.reminderDisplay)

  }
  deleteReminder(event:any){
    if(this.codeEvent == 13)
    {
      this.codeEvent=0
        return false; 
    }
      this.reminders.splice(-1,1)
  return true
 

  }
  save()
  {
    this.reminder.Update(this.reminders).subscribe(s=>console.log(s))
  }
}
