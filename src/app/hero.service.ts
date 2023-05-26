import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private apiUrl = 'http://localhost:5000/heroes'

  constructor(private http:HttpClient) { }

  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(this.apiUrl);
  }

  updateHeroName(): void{

  }
}
