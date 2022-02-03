// Create a whats app as following

import contacts from "../contacts/contacts";
import { Messaging } from "../messaging";
import { UserInterface } from "../user/create-user";
import postUser from "../user/post-user";

// Users having contacts and can chat with any contact
// Users can see status of all the contacts
// User can post status

class Users extends Messaging {
  users: UserInterface[] = [
    {
      id: 0,
      name: "Lufta",
      hasStatus: false,
    },
    {
      id: 1,
      name: "Mark",
      hasStatus: false,
    },
  ];

  messageFromContact: any | undefined;
  status: any[] = [];

  constructor() {
    super();
  }

  listUsers() {
    this.users.push(postUser.user);
  }

  subscribedContacts() {
    return contacts.contact;
  }

  sendMessage(message: any) {
    //user1 will send Hi to contact2
    if (this.isInputText) {
      this.sendtextMessage(
        (contacts.messageFromUser = `${this.users[0].name}:  ${message}`)
      );
    } else {
      this.sendImage(
        (contacts.messageFromUser = `${this.users[0].name}:  ${message}`)
      );
    }
  }

  receiveMessage() {
    //user will recieve message from contact
    console.log("contact -", this.messageFromContact);
  }

  haveStatus(status: any[]) {
    for (let i = 0; i < this.users.length; i++) {
      if (status[i].name === this.users[i].name) {
        this.status.push(status);
        this.sendTextStatus(
          this.status[i].push(`${status[i].name}:  ${status[i].message}`)
        );
        console.log("User Status -", status);
      }
      return false;
    }
  }
  viewContactsStatus() {
    console.log("Status Contact -", contacts.statusFromContacts);
  }
}

export default new Users();
