import { Injectable } from '@angular/core';

import { Player, IPlayer } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor() {}

  playerNumber: number = 0;

  playerNameList: string[] = [];
  playerList: Player[] = [];

  initPlayers(playerCount) {
    for (let i = 1; i <= playerCount; i++) {
      let player = new Player();
      this.playerList.push(player);
      this.playerNumber++;
    }
  }

  setPlayers(playerNameList) {
    this.playerList.forEach(function (value, index) {
      value.name = playerNameList[index];
    });
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
    }
  }

  incPlayerPoints() {
    switch (true) {
      case this.playerList[0].active:
        this.playerList[0].points++;
        break;
      case this.playerList[1].active:
        this.playerList[1].points++;
        break;
      case this.playerList[2].active:
        this.playerList[2].points++;
        break;
      case this.playerList[3].active:
        this.playerList[3].points++;
        break;
      default:
    }
  }
}
