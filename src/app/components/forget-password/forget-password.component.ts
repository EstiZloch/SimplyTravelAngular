import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/shared/models/Customer.model';
import {CustomerService} from '../../../shared/services/customer.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ResultsService } from 'src/shared/services/results.service';

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
  inLogin:boolean=false
  inCorrect:boolean=false
  tempPassword:string
  newPassword:string
  constructor( private customer:CustomerService,
    private router:Router,private result:ResultsService
    ) { }

  ngOnInit(): void {
    sessionStorage.setItem('enter','0');
  }
  forget(){

    this.customer.Forget(this.newCustomer).subscribe(customerId=>{
      //לקבל את התעודת זהות שנכנס עכשיו ולשלוח אותו לאזור האישי 
 
      this.result.SetId(customerId);
      if(customerId!=-1)
       {
     
        this.message=true;
       }
      else 
     {
       this.inLogin=true
     }
    });
  }
  confirmPass(){
//לבדוק אם באמת זה היה האימות
this.customer.SignIn(this.newCustomer.IdCustomer,this.tempPassword).subscribe(
  result=>{
    if(result==0)
this.inCorrect=true
  
  else
  this.chooseNewPass=true;
  }
)
}
confirmPassNew(){
this.newCustomer.PasswordCustomer=this.newPassword
  this.customer.Update(this.newCustomer).subscribe(
    result=>{
    console.log('hi')
    });
    this.result.SetStart(true)
    this.router.navigate(['/Welcome']);
  }

  closeAlert() {
    this.inLogin=false;
  }
  closeAlertDanger() {
    this.inCorrect=false;
  }
  comeBack()
  {
    window.location.reload();

  }
}
