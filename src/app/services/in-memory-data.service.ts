import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HEROES } from 'src/dummy-data/heroes';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService extends InMemoryDbService {
  private id = 21;
  createDb() {
    return { heroes: HEROES };
  }

  genId(): number {
    return this.id++;
  }
}
