import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private apiUrl = 'http://localhost:5000/heroes'

  constructor(private http:HttpClient) { }

  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(this.apiUrl);
  }

  updateHeroName(hero: Hero): Observable<Hero>{
    const url = `${this.apiUrl}/${hero.id}`
    return this.http.put<Hero>(url, hero, httpOptions);
  }
}
