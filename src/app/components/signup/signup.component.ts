import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/shared/models/Customer.model';
import { CustomerService } from 'src/shared/services/customer.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ResultsService } from 'src/shared/services/results.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hide = true;
  new: boolean=false;
  newCustomer:Customer=new Customer();
  confirmPass:string=this.newCustomer.PasswordCustomer;
  Login:boolean=false
  constructor(private  customerService:CustomerService,private router: Router,private result:ResultsService) { }

  ngOnInit(): void {
    sessionStorage.setItem('enter','0');
  }
  SignUp(frm:any){
    this.customerService.SignUp(this.newCustomer).subscribe(customerId=>{
     //לקבל את התעודת זהות שנכנס עכשיו ולשלוח אותו לאזור האישי 
     this.newCustomer.IdCustomer=customerId; 
     if(customerId!=0)
      {
        this.result.SetId(customerId);
        this.result.SetStart(true)
        this.router.navigate(['/Welcome']);
      }
     else 
     {
      this.Login=true

     }

     });
     
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
    OldCustomerClick(){
      window.location.reload();
        }
        closeAlert() {
          this.Login=false;
        }
    comeBack()
  {
    this.Login=false
this.OldCustomerClick()
  }
}
