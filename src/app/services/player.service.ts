import { Injectable } from '@angular/core';
import { Player } from '../models/player';
import { CardService } from './card.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor() {}
  playerOne: Player;
  playerTwo: Player;
  activePlayer: string;

  points: number = 0;

  initPlayers(playerOne, playerTwo) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
  }

  switchPlayer() {
    if (this.playerOne.active) {
      this.playerOne.active = false;
      this.playerTwo.active = true;
      this.activePlayer = this.playerTwo.name;
    } else if (this.playerTwo.active) {
      this.playerTwo.active = false;
      this.playerOne.active = true;
      this.activePlayer = this.playerOne.name;
    }
  }

  incPlayerPoints() {
    if (this.activePlayer === this.playerOne.name) {
      this.playerOne.points++;
    } else if (this.activePlayer === this.playerTwo.name)
      this.playerTwo.points++;
  }
}
