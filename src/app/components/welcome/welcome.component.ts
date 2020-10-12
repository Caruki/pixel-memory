import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoardService } from 'src/app/services/board.service';
import { GameService } from 'src/app/services/game.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  constructor(
    private router: Router,
    public playerService: PlayerService,
    public gameService: GameService
  ) {}

  ngOnInit(): void {}

  @Input() playerNameList: string[];

  playerCount: number;

  setName(event) {}

  onSubmit() {
    this.playerService.initPlayers(this.playerCount);
  }

  startGame() {
    this.playerService.playerList[0].active = true;
    this.playerService.setPlayers(this.playerService.playerNameList);
    this.router.navigate(['/game']);
  }
}
