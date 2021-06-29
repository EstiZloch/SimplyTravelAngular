import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Region } from '../models/Region.model';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  url='https://localhost:44300/api/regions/'
  constructor(private http:HttpClient) { }
  GetRegions():Observable<Region[]> {
    return this.http.get<Region[]>(`${this.url}/getRegions`);
      }
}
