export class Comment {
  brickId: number | undefined;
  name: string | undefined;
  message: string | undefined;

  constructor(brickId: number, name: string, message: string) {
    this.brickId = brickId;
    this.name = name;
    this.message = message;
  }
}
