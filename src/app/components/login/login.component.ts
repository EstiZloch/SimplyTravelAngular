import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { concatMap, delay, repeat } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  src$: any;

  constructor(private router:Router) { }

  ngOnInit() {
    this.src$ = of('../assets/3.jpg','../assets/1.jpg','../assets/2.jpg').pipe(
      concatMap(url => of(url).pipe(delay(5000))),
      repeat()
   );
  }
  enterNoAuth(){
    //כניסה ללא הרשמה
    this.router.navigate(['/Welcome']);
  }
}
