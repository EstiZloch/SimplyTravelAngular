import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reminder } from '../models/Reminder.model';
import { ReminderDisplay } from '../models/ReminderDisplay.model';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  url='https://localhost:44300/api/reminders/'
  constructor(private http:HttpClient) { }
  GetReminders(id:number):Observable<Observable<Reminder>>
{
 return this.http.get<Observable<Reminder>>(`${this.url}getReminders/${id}`)
}
Update(reminder:ReminderDisplay[]):Observable<any>
{
let  headers=new Headers({'Content-type':'application/json; charset=utf-8'});
headers.append("Access-Control-Allow-Origin", "*")
return this.http.post<number>(`${this.url}update`,reminder);
}
}
