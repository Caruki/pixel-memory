import { trigger, transition, animate, style, keyframes, state } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

import { BoardService } from 'src/app/services/board.service';
import { CardService } from 'src/app/services/card.service';

import { Card } from '../../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('flip', [
      state('true', style({
        transform: 'rotateY(0deg)'
      })),
      state('false', style({
        transform: 'rotateY(180deg)'
      })),
      transition('true => false', [
        animate('0.8s 0s ease-out',
          keyframes([
            style({
              transform: 'perspective(400px) rotateY(0deg)',
              offset: 0
            }),
            style({
              transform: 'perspective(400px) scale3d(1.5, 1.5, 1.5) rotateY(80deg)',
              offset: 0.4
            }),
            style({
              transform: 'perspective(400px) scale3d(1.5, 1.5, 1.5) rotateY(100deg)',
              offset: 0.5
            }),
            style({
              transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) rotateY(180deg)',
              offset: 0.8
            }),
            style({
              transform: 'perspective(400px) rotateY(180deg)',
              offset: 1
            })
          ]))
      ]),
      transition('false => true', [
        animate('0.7s 0s ease-in',
          keyframes([
            style({
              transform: 'perspective(400px) rotateY(-180deg)',
              offset: 0
            }),
            style({
              transform: 'perspective(400px) scale3d(1.5, 1.5, 1.5) rotateY(100deg)',
              offset: 0.4
            }),
            style({
              transform: 'perspective(400px) scale3d(1.5, 1.5, 1.5) rotateY(80deg)',
              offset: 0.5
            }),
            style({
              transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) rotateY(0deg)',
              offset: 0.8
            }),
            style({
              transform: 'perspective(400px) rotateY(0deg)',
              offset: 1
            })
          ]))
      ])
    ])
  ]
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
