import { Injectable } from '@angular/core';
import { CardService } from './card.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor() {}

  playerPoints: number = 0;

  incPlayerPoints() {
    this.playerPoints++;
  }
}
