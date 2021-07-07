import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SiteInTrip } from '../models/SiteInTrip.model';
import { Trip } from '../models/Trip.model';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  url='https://localhost:44300/api/trips/'
  constructor(private http:HttpClient){
}
  AddTrip(trip:Trip):Observable<any>
  {
  let  headers=new Headers({'Content-type':'application/json; charset=utf-8'});
  headers.append("Access-Control-Allow-Origin", "*")
  return this.http.post<number>(`${this.url}addTrip`,trip);
  }


}
