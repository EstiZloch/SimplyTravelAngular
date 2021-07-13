import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Site } from '../models/Site.model';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  
sitesResult:string[][]
currentNumberTrip:number
idCustomer:number=-1
codeSite:number=-1
curr:number=1
  constructor() { }
  SetResults(sitesResult:string[][]):void
  {
    this.sitesResult=sitesResult;
    console.log(this.sitesResult)
  }
  GetResults():string[][]
  {
    console.log(this.sitesResult)
    return this.sitesResult;
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
}
