import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/shared/models/Customer.model';
import { CustomerService } from 'src/shared/services/customer.service';
import { ResultsService } from 'src/shared/services/results.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

newCustomer:Customer=new Customer();
season: string = '0';
favoriteSeason: string = '1';
idCustomer:string=''
check1:boolean
check2:boolean
  constructor(private result:ResultsService,private customer:CustomerService,private router:Router) { }

  ngOnInit(): void {
    this.customer.GetDetails(this.result.GetId()).subscribe(
      details=>{
        if(details!=null)
        {

        this.newCustomer=details;
        if(details.Car_bus)
        this.check1=true
        else
        this.check1=false
        if(details.Free_notFree)
        this.check2=true
        else
        this.check2=false
        }
      }
    )
  }
  formatLabel(value: number) {
    let lavels=['קל','בינוני','קשה']
    if (value >= 1) {
      return lavels[(value-1)]
    }

    return 'בחר רמה';
  }
  AddDetails()
  {
    this.customer.UpdateCustomer(this.newCustomer).subscribe(name=>{});
    this.router.navigate(['Welcome']);
  }
}
