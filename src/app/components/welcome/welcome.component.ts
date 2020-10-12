import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoardService } from 'src/app/services/board.service';
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
    private boardService: BoardService
  ) {}

  ngOnInit(): void {}

  playerCount: number;
  chosenName: string;
  showGame: boolean = false;

  setName(value: object) {}

  onSubmit() {
    this.playerService.initPlayers(this.playerCount);
  }

  startGame() {
    this.playerService.playerList[0].active = true;
    this.router.navigate(['/game']);
  }
}
