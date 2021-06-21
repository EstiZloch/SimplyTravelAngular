import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Site } from 'src/app/shared/models/Site.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  url='https://localhost:44371/api/customers/'
  constructor(private http:HttpClient){
}
  SignUp(site:Site):Observable<any>
{
let  headers=new Headers({'Content-type':'application/json; charset=utf-8'});
headers.append("Access-Control-Allow-Origin", "*")
return this.http.post<number>(`${this.url}signUp`,site);
}
}
