import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultsService } from 'src/shared/services/results.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private result:ResultsService) { }

  ngOnInit(): void {
  }
  LogOut()
{ 
this.result.SetId(-1);
  this.router.navigate(['']);
  }
  HomePage()
  {
    this.result.SetCurr(1)
    this.router.navigate(['Welcome']);

  }
}
