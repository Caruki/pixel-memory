import { Injectable } from '@angular/core';
import { CardService } from './card.service';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  constructor() {}

  lockedBoard: boolean = false;
  showBoard: boolean = false;

  toggleLock() {
    this.lockedBoard = !this.lockedBoard;
  }

  toggleShow() {
    this.showBoard = !this.showBoard;
  }
}
