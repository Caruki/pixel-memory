import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(private http: HttpClient) {}

  cardsUrl: string = '/api/cards';

  clickedFirst: string = '';
  clickedSecond: string = '';
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
