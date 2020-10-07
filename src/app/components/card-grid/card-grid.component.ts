import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CardService } from 'src/app/services/card.service';

import { Card } from '../../models/card';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent implements OnInit {
  cardList: Observable<Card[]>;
  cardListLength: number = 30;
  positionArray: number[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.setPositionArray();
    this.getCards();
    this.shufflePosition();
  }

  setPositionArray() {
    for (let i = 1; i <= this.cardListLength; i++) {
      this.positionArray.push(i);
    }
  }

  getCards(): void {
    this.cardList = this.cardService.getAllCards();
  }

  shufflePosition() {
    this.positionArray = this.shuffle(this.positionArray);
  }

  shuffle(array) {
    let i = array.length,
      j = 0,
      temp;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));

      // swap randomly chosen element with current element
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }
}
