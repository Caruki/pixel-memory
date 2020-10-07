import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Card } from '../models/card';
import { clear } from 'console';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(private http: HttpClient) {}

  cardsUrl: string = '/api/cards';

  clickedFirst: Card;
  clickedSecond: Card;
  isMatch: boolean = false;
  cardListLength: number;

  handleError() {
    console.log('something went wrong');
  }

  getAllCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.cardsUrl);
  }

  getCardListLength() {
    return this.getAllCards().subscribe((cards) => {
      this.cardListLength = cards.length;
    });
  }

  setFirstCard(card) {
    this.clickedFirst = card;
  }

  getFirstCard() {
    return this.clickedFirst;
  }

  setSecondCard(card) {
    this.clickedSecond = card;
  }

  getSecondCard() {
    return this.clickedSecond;
  }

  checkMatch() {
    if (this.clickedFirst.title === this.clickedSecond.title) {
      this.isMatch = true;
      console.log(
        'first:',
        this.clickedFirst.title,
        'second:',
        this.clickedSecond.title,
        'ismatch?',
        this.isMatch
      );
      this.clickedFirst = undefined;
      this.clickedSecond = undefined;
    } else {
      this.isMatch = false;
      console.log(
        'first:',
        this.clickedFirst.title,
        'second:',
        this.clickedSecond.title,
        'ismatch?',
        this.isMatch
      );
      this.hideCards();
    }

    return this.isMatch;
  }

  hideCards() {
    setTimeout(() => {
      this.clickedFirst.visible = false;
      this.clickedSecond.visible = false;
      this.clickedFirst = undefined;
      this.clickedSecond = undefined;
    }, 1000);
  }
}
