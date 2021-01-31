import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from 'src/dummy-data/heroes';
import { Hero } from 'src/interfaces/hero';
import { MessageService } from './message.service';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private api = 'api/heroes';
  constructor(private messageService: MessageService, private httpClient: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return this.httpClient.get<Hero[]>(this.api);
  }

  getHero(id: any): Observable<Hero | undefined> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find((hero) => hero.id === id));
  }
}
