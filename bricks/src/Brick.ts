import { User, UserModal } from "./user";

export interface BrickStyles {
  wallId?: number;
  brickId?: number;
  brickNumber?: number;
  paintedBy?: {
    user?: UserModal;
  };
  viewedBy?: {};
  commentedBy?: {};
  dedicatedTo?: {};
  hasAdminEditted?: {};
}

export class Brick {
  styles: BrickStyles | undefined;

  constructor(brickStyles: BrickStyles) {
    this.styles = brickStyles;
    console.log("User Id: ", this.styles.paintedBy?.user?.userId);
  }
  validateOwner() {
    if (this.styles?.paintedBy?.user) {
    }
  }

  getBrick() {
    return {
      brick: this.styles,
    };
  }
}
