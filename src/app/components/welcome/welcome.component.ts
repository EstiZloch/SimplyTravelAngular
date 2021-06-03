import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  subscribe:any
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  LogIn(){
    //sessionStorage.setItem('enter','3')
        this.router.navigate(['/LogIn']);
      }
       SignUp(){
    //sessionStorage.setItem('enter','3')
        this.router.navigate(['/SignUp']);
       }
}
