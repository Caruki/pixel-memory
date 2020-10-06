import { Component, Input, OnInit } from '@angular/core';

import { Card } from '../../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Card;

  clickedFirst: string;
  clickedSecond: string;

  constructor() {}

  ngOnInit(): void {}

  onCardClick(card: Card): void {
    card.visible = true;
    console.log(card.title, card.visible);
  }
}
