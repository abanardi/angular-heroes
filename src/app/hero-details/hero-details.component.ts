import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit{
  constructor(private route:ActivatedRoute){}
  heroId: number | undefined;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.heroId = params['heroId'];
    });
    
  }
}
