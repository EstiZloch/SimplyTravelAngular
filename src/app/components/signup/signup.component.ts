import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/shared/models/Customer.model';
import { CustomerService } from 'src/shared/services/customer.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hide = true;
  newCustomer:Customer=new Customer();
  confirmPass:string=this.newCustomer.PasswordCustomer;
  constructor(private  customerService:CustomerService,private router: Router) { }

  ngOnInit(): void {
    sessionStorage.setItem('enter','0');
  }
  SignUp(frm:any){
    this.customerService.SignUp(this.newCustomer).subscribe(customerId=>{
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
    checkPasswords(group: FormGroup) { // here we have the 'passwords' group
     // let pass = group.get('password').value;
      //let confirmPass = group.get('confirmPass').value;
    
     // return pass === confirmPass ? null : { notSame: true }     
    }
    forget(frm:any){
      this.customerService.Forget(this.newCustomer).subscribe(customerId=>{
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
}
