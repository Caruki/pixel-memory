import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor() {}

  clickedFirst: string = '';
  clickedSecond: string = '';
  isMatch: boolean = false;

  setFirstCard(card) {
    this.clickedFirst = card.title;
  }

  getFirstCard() {
    return this.clickedFirst;
  }

  setSecondCard(card) {
    this.clickedSecond = card.title;
  }

  getSecondCard() {
    return this.clickedSecond;
  }

  checkMatch() {
    if (this.clickedFirst === this.clickedSecond) {
      this.isMatch = true;
      console.log(
        'first:',
        this.clickedFirst,
        'second:',
        this.clickedSecond,
        'ismatch?',
        this.isMatch
      );
      this.clickedFirst = '';
      this.clickedSecond = '';
    } else {
      console.log(
        'first:',
        this.clickedFirst,
        'second:',
        this.clickedSecond,
        'ismatch?',
        this.isMatch
      );
      this.isMatch = false;
      this.clickedFirst = '';
      this.clickedSecond = '';
    }

    return this.isMatch;
  }
}
