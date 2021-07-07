import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SiteInTripToAdd } from '../models/SiteInTripToAdd.model';

@Injectable({
  providedIn: 'root'
})
export class SiteInTripService {

  url='https://localhost:44300/api/SitesInTrips/'
  constructor(private http:HttpClient){
}
  AddSiteInTrip(SiteInTrip:SiteInTripToAdd):Observable<any>
  {
  let  headers=new Headers({'Content-type':'application/json; charset=utf-8'});
  headers.append("Access-Control-Allow-Origin", "*")
  return this.http.post<number>(`${this.url}addSiteInTrip`,SiteInTrip);
  }
}
