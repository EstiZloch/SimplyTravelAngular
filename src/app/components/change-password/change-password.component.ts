import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/shared/models/Customer.model';
import { CustomerService } from 'src/shared/services/customer.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
newCustomer:Customer=new Customer();
isCorrect:boolean=false
  constructor(private customerService:CustomerService,private router:Router) 
  { 

  }

  ngOnInit(): void {

  }
Save(frm:any)
{
this.customerService.CheckPassword(this.newCustomer).subscribe
(
  userId=>{
    if(userId==-1)
    {
    this.isCorrect=true
    this.newCustomer=new Customer();
    }
    else
    this.router.navigate(['Welcome']);
  }
)
}
closeAlert() {
  this.isCorrect=false;
}
}
