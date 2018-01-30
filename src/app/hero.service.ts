import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) {

  }

  getHeroes(): Observable<Hero[]> {

    this.messageService.add('HeroService: fetched heroes');

    return of(HEROES);
  }
}
