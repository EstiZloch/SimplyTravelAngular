import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Responses } from '../models/Responses.model';
import { ResultsService } from './results.service';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  url='https://localhost:44300/api/responses/'
  constructor(private http:HttpClient,private result:ResultsService) { }
  GetResponses(code:number):Observable<Responses[]>
  {
   return this.http.get<Responses[]>(`${this.url}getResponseForTrip/${code}/${this.result.GetId()}`)
  }
  Update(customer:Responses):Observable<void>
{
let  headers=new Headers({'Content-type':'application/json; charset=utf-8'});
headers.append("Access-Control-Allow-Origin", "*")
return this.http.post<void>(`${this.url}Update`,customer);
}
}
