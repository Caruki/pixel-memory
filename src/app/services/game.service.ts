import { Injectable } from '@angular/core';
import { PlayerService } from './player.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(private playerService: PlayerService) {}

  gameActive: boolean = false;

  checkGameActive() {
    if (
      this.playerService.playerNumber ===
      this.playerService.playerNameList.length
    ) {
      this.gameActive = true;
    }
  }
}
