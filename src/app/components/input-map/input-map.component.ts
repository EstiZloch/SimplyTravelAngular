import { Component } from '@angular/core';

@Component({
  selector: 'app-input-map',
  templateUrl: './input-map.component.html',
  styleUrls: ['./input-map.component.css']
})
export class InputMapComponent {
    //Local Variable defined
    formattedaddress=" ";
    options={
      componentRestrictions:{
        
        country:["IL"],
        language:["Hebrew"]
        
      }

      }
    title = 'rou';
      public AddressChange(address: any) {
        //setting address from API to local variable
         this.formattedaddress=address.formatted_address;

console.log(this.formattedaddress);
      }
}
