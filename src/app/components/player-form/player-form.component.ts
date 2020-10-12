import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {
  constructor(
    private playerService: PlayerService,
    private gameService: GameService
  ) {}

  ngOnInit(): void {}

  playerName: string;

  @Input() title: number;

  onNameInput(event) {
    switch (this.title) {
      case 0:
        this.playerService.playerNameList[0] = this.playerName;
        break;
      case 1:
        this.playerService.playerNameList[1] = this.playerName;
        break;
      case 2:
        this.playerService.playerNameList[2] = this.playerName;
        break;
      case 3:
        this.playerService.playerNameList[3] = this.playerName;
        break;
      case 4:
        this.playerService.playerNameList[4] = this.playerName;
        break;
    }
    this.gameService.checkGameActive();
  }
}
