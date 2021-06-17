import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Region } from '../models/Region.model';
import { SubRegion } from '../models/SubRegion.model';

@Injectable({
  providedIn: 'root'
})
export class SubRegionService {
  url='https://localhost:44371/api/subRegions/'
  constructor(private http:HttpClient) { }
  GetSubRegions(region:string):Observable<SubRegion[]> {
    return this.http.get<SubRegion[]>(`${this.url}getSubRegions/${region}`);
      }
}
