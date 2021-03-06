import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Responses } from '../models/Responses.model';
import { Site } from '../models/Site.model';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
sitesInTrip:Responses[]=[]
tripsResult:string[][]
sitesResult:string[][]
sitesResult1:string[][]
currentNumberTrip:number
currentNumberTrip1:number
currentNumberTrip2:number
idCustomer:number=-1
codeSite:number=-1
curr:number=1
codeTrip:number
start:boolean=false
  constructor() { }
  SetStart(trips:boolean):void
  {
    this.start=trips;
  }
  GetStart():boolean
  {
    return this.start;
  }
  SetSitesInTrip(trips:Responses[]):void
  {
    this.sitesInTrip=trips;
    console.log(this.sitesInTrip);
  }
  GetSitesInTrip():Responses[]
  {
    return this.sitesInTrip;
  }
  SetTrips(trips:string[][]):void
  {
    this.tripsResult=trips;
  }
  GetTrips():string[][]
  {
    return this.tripsResult;
  }
  SetResults1(sitesResult1:string[][]):void
  {
    this.sitesResult1=sitesResult1;
  }
  GetResults1():string[][]
  {
    return this.sitesResult1;
  }
  SetResults(sitesResult:string[][]):void
  {
    this.sitesResult=sitesResult;
  }
  GetResults():string[][]
  {
    return this.sitesResult;
  }
  SetNumber1(value:number)
  {
    this.currentNumberTrip1=value
  }
  GetNumber1():number
  {

    return this.currentNumberTrip1;
  }
  SetNumber2(value:number)
  {
    this.currentNumberTrip2=value
  }
  GetNumber2():number
  {

    return this.currentNumberTrip2;
  }
  SetNumber(value:number)
  {
    this.currentNumberTrip=value
  }
  GetNumber():number
  {
    return this.currentNumberTrip;
  }
  SetId(value:number)
  {
    this.idCustomer=value
  }
  GetId():number
  {
    return this.idCustomer;
  }
  SetCode(value:number)
  {
    this.codeSite=value
  }
  GetCode():number
  {
    return this.codeSite;
  }
  SetCurr(value:number)
  {
    this.curr=value
  }
  GetCurr():number
  {
    return this.curr;
  }
  SetCodeTrip(value:number)
  {
    this.codeTrip=value
  }
  GetCodeTrip():number
  {
    return this.codeTrip;
  }
}
