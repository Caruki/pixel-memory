import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BoardService } from './services/board.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public boardService: BoardService) {}
  title = 'pixel-memory';
}
