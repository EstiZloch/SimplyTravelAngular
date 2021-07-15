import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  url='https://localhost:44300/api/responses/'
  constructor(private http:HttpClient) { }
  GetResponses(code:number):Observable<Response[]>
  {
   return this.http.get<Response[]>(`${this.url}getResponseForTrip/${code}`)
  }
}
