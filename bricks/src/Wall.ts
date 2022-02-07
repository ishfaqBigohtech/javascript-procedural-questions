import { BrickStyles } from "./Brick";

export interface WallModal {
  cityId?: number;
  wallId?: number;
  wallNumber?: number;
  bricks?: BrickStyles;
}

export class Wall {
  wallDetails!: WallModal;

  constructor(wall: WallModal) {
    this.wallDetails = wall;
  }

  getWalls() {
    return {
      walls: this.wallDetails,
    };
  }
}
