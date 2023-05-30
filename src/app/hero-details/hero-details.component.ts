import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from '../Hero';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css'],
})
export class HeroDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}
  heroId: number | undefined;
  showName: string | undefined;
  heroName: string | undefined;
  heroes: Hero[] = [];

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.heroId = params['heroId'];
    });

    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
      this.showName = this.heroes.filter((hero) => hero.id == this.heroId)[0].name;
    });

    
  }

  submitHeroInfo(): void {
    // Create new hero object
    if (
      this.heroName === undefined ||
      this.heroName === '' ||
      this.heroId === undefined
    ) {
      window.alert('Please put in a name');
    } else {
      const newHero: Hero = {
        id: this.heroId,
        name: this.heroName,
      };
      this.showName = newHero.name;
      this.heroService.updateHeroName(newHero).subscribe();
      this.heroName = '';
    }
  }

  navigateBack(): void{
    this.location.back();
  }
}
