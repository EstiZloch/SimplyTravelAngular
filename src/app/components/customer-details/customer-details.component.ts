import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/shared/models/Customer.model';

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
  constructor() { }

  ngOnInit(): void {
  }
  formatLabel(value: number) {
    let lavels=['קל','בינוני','קשה']
    if (value >= 1) {
      return lavels[(value-1)]
    }

    return 'בחר רמה';
  }
}
