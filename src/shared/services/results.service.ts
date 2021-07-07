import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Site } from '../models/Site.model';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  
sitesResult:string[][]
currentNumberTrip:number
idCustomer:number=207426974
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
}
