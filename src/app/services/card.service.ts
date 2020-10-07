import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models/card';
import { BoardService } from './board.service';
import { PlayerService } from './player.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(
    private http: HttpClient,
    private boardService: BoardService,
    private playerService: PlayerService
  ) {}

  cardsUrl: string = '/api/cards';

  clickedFirst: Card;
  clickedSecond: Card;
  isMatch: boolean = false;
  cardListLength: number;

  matchedCards = new BehaviorSubject(0);

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
    this.boardService.toggleLock();
    if (this.clickedFirst.title === this.clickedSecond.title) {
      this.isMatch = true;
      this.playerService.incPlayerPoints();
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
      this.boardService.toggleLock();
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
    }

    return this.isMatch;
  }

  hideCards() {
    setTimeout(() => {
      this.playerService.switchPlayer();
      this.clickedFirst.visible = false;
      this.clickedSecond.visible = false;
      this.clickedFirst = undefined;
      this.clickedSecond = undefined;
      this.boardService.toggleLock();
    }, 550);
  }
}
