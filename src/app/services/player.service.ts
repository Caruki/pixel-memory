import { Injectable } from '@angular/core';
import { Player, IPlayer } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor() {}
  playerOne: IPlayer;
  playerTwo: IPlayer;
  activePlayer: string;

  playerCount: number;

  playerList: IPlayer[] = [];

  points: number = 0;

  initPlayers(playerCount) {
    for (let i = 1; i <= playerCount; i++) {
      let player = new Player();
      this.playerList.push(player);
    }
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
