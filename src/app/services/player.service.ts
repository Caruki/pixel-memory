import { Injectable } from '@angular/core';

import { Player, IPlayer } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor() {}

  activePlayer: string;

  playerCount: number;

  playerList: Player[] = [];

  points: number = 0;

  initPlayers(playerCount) {
    for (let i = 1; i <= playerCount; i++) {
      let player = new Player();
      this.playerList.push(player);
    }
  }

  switchPlayer() {
    switch (true) {
      case this.playerList[0].active:
        this.playerList[0].active = false;
        this.playerList[1].active = true;
        break;
      case this.playerList[1].active:
        this.playerList[1].active = false;
        if (this.playerList[2]) this.playerList[2].active = true;
        else this.playerList[0].active = true;
        break;
      case this.playerList[2].active:
        this.playerList[2].active = false;
        if (this.playerList[3]) this.playerList[3].active = true;
        else this.playerList[0].active = true;
        break;
      case this.playerList[3].active:
        this.playerList[3].active = false;
        this.playerList[0].active = true;
        break;
      default:
    }
  }

  /* if (i === this.playerList.length - 1) {
        console.log('i on restart', i);
        this.playerList[i - 1].active = false;
        i = -1;
        this.playerList[0].active = true;
        console.log('restartloop', i, this.playerList);
        continue;
      }
      if (this.playerList[i].active === true) {
        console.log('i in loop', i);
        console.log('list in loop before update', this.playerList);
        this.playerList[i].active = false;
        if (i === this.playerList.length - 1) break;
        this.playerList[i + 1].active = true;
        console.log('list in loop after update', this.playerList);
        break;
      }
    } */

  incPlayerPoints() {
    for (let i = -1; i <= this.playerList.length; i++) {
      if (this.playerList[i].active === true) {
        this.playerList[i].points++;
        return;
      }
    }
  }
  /* if (this.activePlayer === this.playerOne.name) {
      this.playerOne.points++;
    } else if (this.activePlayer === this.playerTwo.name)
      this.playerTwo.points++;
   */
}
