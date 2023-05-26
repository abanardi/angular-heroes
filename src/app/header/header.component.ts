import { Component } from '@angular/core';
// import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router){}
  
  clickDashboard(){
    this.router.navigate(['']);
    console.log("Dashboard clicked");
  }

  clickHeroes(){
    this.router.navigate(['/heroes']);
    console.log("Heroes clicked");
  }

}
