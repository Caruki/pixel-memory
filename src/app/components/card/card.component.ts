import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

import { BoardService } from 'src/app/services/board.service';
import { CardService } from 'src/app/services/card.service';
import { PlayerService } from 'src/app/services/player.service';

import { Card } from '../../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Card;

  @Input() position: number;

  constructor(
    private cardService: CardService,
    public boardService: BoardService
  ) {}

  ngOnInit(): void {}

  onCardClick(card: Card): void {
    card.visible = true;
    if (this.cardService.getFirstCard()) {
      this.cardService.setSecondCard(card);
      this.cardService.checkMatch();
      if (!this.cardService.isMatch) {
        this.cardService.hideCards();
      }
    } else {
      this.cardService.setFirstCard(card);
    }
  }
}
