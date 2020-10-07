import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';

import { CardService } from 'src/app/services/card.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-overview',
  templateUrl: './player-overview.component.html',
  styleUrls: ['./player-overview.component.scss']
})
export class PlayerOverviewComponent implements OnInit {
  constructor(public playerService: PlayerService) {}

  playerOne: Player = {
    name: 'One',
    points: 0,
    active: true
  };

  playerTwo: Player = {
    name: 'Two',
    points: 0,
    active: false
  };

  ngOnInit(): void {
    this.playerService.initPlayers(this.playerOne, this.playerTwo);
  }
}
