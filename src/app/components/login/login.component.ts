import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { concatMap, delay, repeat } from 'rxjs/operators';
import { ResultsService } from 'src/shared/services/results.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  src$: any;

  constructor(private router:Router,private result:ResultsService) { }

  ngOnInit() {
    this.src$ = of('../assets/1.jpg','../assets/7.jpg','../assets/6.jpg','../assets/5.jpg','../assets/4.jpg','../assets/3.jpg','../assets/2.jpg').pipe(
      concatMap(url => of(url).pipe(delay(5000))),
      repeat()
   );
  }
  enterNoAuth(){
    this.result.SetId(-1);
    console.log(this.result.GetId())
    //כניסה ללא הרשמה
    this.router.navigate(['/Welcome']);

  }
}
