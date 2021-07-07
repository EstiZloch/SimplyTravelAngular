import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SiteDisplay } from '../models/SiteDisplay.model';
import { Observable } from 'rxjs';
import { Site } from '../models/Site.model';
import { ResultsService } from './results.service';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  url='https://localhost:44300/api/sites/'
  constructor(private http:HttpClient,private result:ResultsService){
}

  AddSite(site:Site):Observable<any>
{
let  headers=new Headers({'Content-type':'application/json; charset=utf-8'});
headers.append("Access-Control-Allow-Origin", "*")
return this.http.post<number>(`${this.url}signUp`,site);
}
GetMin(code:number):Observable<number> {
  return this.http.get<number>(`${this.url}getMin/${code}`)
    }
    GetMax(code:number):Observable<number> {
      return this.http.get<number>(`${this.url}getMax/${code}`)
        }
        GetMisLiter(code:number):Observable<number> {
          return this.http.get<number>(`${this.url}getMis/${code}`)
            }
            GetSpendTime(code:number):Observable<number> {
              return this.http.get<number>(`${this.url}getTime/${code}`)
                }
                GetAllSites():Observable<SiteDisplay[]> {
                  return this.http.get<SiteDisplay[]>(`${this.url}getAllSites`)
                    }
                    Plan(code: number, min: number, max: number, address: string, half: boolean, carOrBus: boolean):Observable<string[][]> {
                      return this.http.get<string[][]>(`${this.url}plan/${code}/${min}/${max}/${address}/${half}/${carOrBus}/${this.result.GetId()}`)
                    }


}
