import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { PlayerService } from './player.service';

@Injectable()
export class GameRouteGuard implements CanActivate {

  constructor(private playerService: PlayerService) {}

  canActivate() {
    return this.playerService.playerList[0].active === true;
  }
}