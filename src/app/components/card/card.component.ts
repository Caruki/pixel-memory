import { Component, Input, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

import { Card } from '../../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Card;

  @Input() position: number;

  constructor(private cardService: CardService) {}

  ngOnInit(): void {}

  onCardClick(card: Card): void {
    card.visible = true;
    console.log(card.title, card.visible);

    if (this.cardService.getFirstCard()) {
      this.cardService.setSecondCard(card);
      this.cardService.checkMatch();
    } else {
      this.cardService.setFirstCard(card);
    }
  }
}
