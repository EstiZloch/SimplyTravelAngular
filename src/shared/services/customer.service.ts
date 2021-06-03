import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Customer}     from '../models/Customer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

   url='https://localhost:44371/api/customers/'
  constructor(private http:HttpClient){
}
SignIn(id:number, password:string):Observable<number>
{
  console.log(id);
  console.log(password);
 return this.http.get<number>(`${this.url}signIn/${id}/${password}`)
}
SignUp(customer:Customer):Observable<any>
{
let  headers=new Headers({'Content-type':'application/json; charset=utf-8'});
headers.append("Access-Control-Allow-Origin", "*")
return this.http.post<number>(`${this.url}signUp`,customer);
}
Forget(customer:Customer):Observable<any>
{
let  headers=new Headers({'Content-type':'application/json; charset=utf-8'});
headers.append("Access-Control-Allow-Origin", "*")
return this.http.post<number>(`${this.url}ConfirmPassword`,customer);
}
}
