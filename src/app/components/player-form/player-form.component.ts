import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {
  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {}

  playerName: string;

  @Input() title: number;

  onNameInput() {
    switch (this.title) {
      case 0:
        this.playerService.playerList[0].name = this.playerName;
        break;
      case 1:
        this.playerService.playerList[1].name = this.playerName;
        break;
      case 2:
        this.playerService.playerList[2].name = this.playerName;
        break;
      case 3:
        this.playerService.playerList[3].name = this.playerName;
        break;
      case 4:
        this.playerService.playerList[4].name = this.playerName;
        break;
      default:
    }
  }
}
