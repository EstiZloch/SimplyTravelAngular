import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/shared/models/Customer.model';
import {CustomerService} from '../../../shared/services/customer.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  newCustomer:Customer=new Customer();
  subscribe:any
  loginForm:FormGroup
  message=false;
  confirm=new FormControl();
  chooseNewPass: boolean=false;
  constructor( private customer:CustomerService,
    private router:Router,
    ) { }

  ngOnInit(): void {
    sessionStorage.setItem('enter','0');
  }
  forget(){
    this.message=true;//צריך למחוק מפה יש בהמשך
    this.customer.Forget(this.newCustomer).subscribe(customerId=>{
      //לקבל את התעודת זהות שנכנס עכשיו ולשלוח אותו לאזור האישי 
      this.newCustomer.IdCustomer=customerId; 
      if(customerId!=0)
       {
         sessionStorage.setItem('companyId',customerId.toString())
        this.message=true;
       }
      else 
      console.log("בחר שם אחר שם משתמש זה כבר קיים במערכת")
      });
  }
  confirmPass(){
//לבדוק אם באמת זה היה האימות
this.chooseNewPass=true;
this.message=false;
  }

}
