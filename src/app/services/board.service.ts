import { Injectable } from '@angular/core';
import { CardService } from './card.service';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  constructor() {}

  lockedBoard: boolean = false;
  

  toggleLock() {
    this.lockedBoard = !this.lockedBoard;
  }

 
}
