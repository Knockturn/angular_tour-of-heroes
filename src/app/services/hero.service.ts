import { Injectable } from '@angular/core';
import {HEROES} from "../components/heroes/shared/mock-heroes";
import {Hero} from "../components/heroes/shared/hero";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
