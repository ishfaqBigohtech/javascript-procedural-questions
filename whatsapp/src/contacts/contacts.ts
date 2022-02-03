// Create a whats app as following

import { Messaging } from "../messaging";
import { UserInterface } from "../user/create-user";
import users from "../users/users";

// Users having contacts and can chat with any contact

// Messaging in text audio and video

// Users can see status of all the contacts

// User can post status

// Status can be text and image

/*
use case: 
  contacts : 
    contact 1, contact 2, contact 3 ....
  users:
    user 1, user 2, user 3 ....
  
  contacts are private and can allow user{id} to chat
*/

export class Contacts extends Messaging {
  contact: UserInterface[] = [
    { id: 0, name: "astrela", hasStatus: true },
    { id: 1, name: "james", hasStatus: false },
    { id: 2, name: "Nunzin", hasStatus: false },
  ];

  messageFromUser: any | undefined;
  statusFromContacts: any[] = [];

  constructor() {
    super();
  }

  sendMessage(message: any) {
    //user1 will send Hi to contact2
    if (this.isInputText) {
      this.sendtextMessage(
        (users.messageFromContact = `${this.contact[0].name}:  ${message}`)
      );
    } else {
      this.sendImage(
        (users.messageFromContact = `${this.contact[0].name}:  ${message}`)
      );
    }
  }

  async recieveMessage() {
    let d = await this.messageFromUser;
    console.log("User -", d);
  }

  haveStatus(status: any[]) {
    for (let i = 0; i < this.contact.length; i++) {
      this.statusFromContacts.push(status);

      if (status[i].name === this.contact[i].name) {
        return this.sendTextStatus(
          this.statusFromContacts[i].push(
            `${status[i].name}:  ${status[i].message}`
          )
        );
      }
      return;
    }
  }
}

export default new Contacts();
