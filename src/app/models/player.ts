export interface IPlayer {
  name: string;
  points: number;
  active: boolean;
}

export class Player implements IPlayer {
  name: string = '';
  points: number = 0;
  active: boolean = false;
}
