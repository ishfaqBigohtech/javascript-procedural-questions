// Create a whats app as following

import { Status } from "./status";

// Users having contacts and can chat with any contact

// Messaging in text audio and video

// Users can see status of all the contacts

// User can post status

// Status can be text and image

export class Messaging extends Status {
  isInputText: boolean = true;
  isInputMedia: boolean = false;
  constructor() {
    super();
  }

  protected sendtextMessage(text: string) {
    return text;
  }

  protected sendImage(image: any) {
    return image;
  }
}
