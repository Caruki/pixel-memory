import { Component, Input, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { BoardService } from 'src/app/services/board.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  constructor(
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
    console.log(this.playerService.PlayerList);
  }

  startGame() {
    this.playerService.PlayerList[0].active = true;
    this.boardService.toggleShow();
    console.log(this.playerService.PlayerList);
  }
}
