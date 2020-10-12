import { TestBed } from '@angular/core/testing';

import { GameRouteGuardService } from './game-route-guard.service';

describe('GameRouteGuardService', () => {
  let service: GameRouteGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameRouteGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
