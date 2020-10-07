import { Component, OnInit } from '@angular/core';

import { CardService } from 'src/app/services/card.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-overview',
  templateUrl: './player-overview.component.html',
  styleUrls: ['./player-overview.component.scss']
})
export class PlayerOverviewComponent implements OnInit {
  constructor(public playerService: PlayerService) {}

  ngOnInit(): void {}
}
