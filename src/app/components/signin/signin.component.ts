import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/shared/models/Customer.model';
import {CustomerService} from '../../../shared/services/customer.service'
import {SignIn} from '../../../shared/models/SignIn.model'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ResultsService } from 'src/shared/services/results.service';
import { textSpanIsEmpty } from 'typescript';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  hide = true;
  hideMail=false;
  signIn:SignIn=new SignIn();
  newCustomer:Customer=new Customer();
  subscribe:any
  loginForm:FormGroup
  forgetPassword: boolean=false;
  new: boolean=false;
  incorrect:boolean=false
  inLogin:boolean=false
  constructor( private customer:CustomerService,
    private router:Router,private result:ResultsService
    ) { }

  ngOnInit(): void {
    sessionStorage.setItem('enter','0');
  }
  enter(frm:any){
    this.customer.SignIn(this.newCustomer.IdCustomer,this.newCustomer.PasswordCustomer).subscribe(userId=>
      {
        if(userId>0)
        {
          this.result.SetId(userId);
          this.router.navigate(['/Welcome']);
        }
        else
        if(userId==0)
        {
        this.incorrect=true
this.newCustomer.PasswordCustomer=''
        }
        else
        {
        this.inLogin=true

        }
      })
  }
  closeAlert() {
    this.incorrect=false;
  }
  forget(frm:any){
    this.hideMail=true;
    this.customer.Forget(this.newCustomer).subscribe(customerId=>{
      //לקבל את התעודת זהות שנכנס עכשיו ולשלוח אותו לאזור האישי 
      this.newCustomer.IdCustomer=customerId; 
      if(customerId!=0)
       {
         sessionStorage.setItem('companyId',customerId.toString())
         this.router.navigate(['/Election']);
       }
      else 
      console.log("בחר שם אחר שם משתמש זה כבר קיים במערכת")
      });
  }
  forgetPass()
  {
    this.forgetPassword=true
  }
  newCustomerClick(){
this.new=true;
  }
  comeBack()
  {
    this.inLogin=false
this.newCustomerClick()
  }
  }

