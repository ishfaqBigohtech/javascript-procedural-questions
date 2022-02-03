// Create a whats app as following

// import contacts from "./src/contacts/contacts";
import contacts from "./src/contacts/contacts";
import users from "./src/users/users";

// Users having contacts and can chat with any contact

// Messaging in text audio and video

// Users can see status of all the contacts

// User can post status

// Status can be text and image

class App {
  constructor() {}

  userSendsMessage(message: any) {
    users.sendMessage(message);
    contacts.recieveMessage();
  }
  contactSendsMessage(message: any) {
    contacts.sendMessage(message);
    users.receiveMessage();
  }
  userSendsStatus(message: any[]) {
    users.haveStatus(message);
  }
  contactHaveStatus(contactName: any[]) {
    contacts.haveStatus(contactName);
    users.viewContactsStatus();
  }
}

let result = new App();

let userMessage = result.userSendsMessage("Hey");
let contactMessage = result.contactSendsMessage("Hi! How are you?");

let userStatus = result.userSendsStatus([
  { name: "Lufta", message: "YetFat!" },
]);

let contactStatus = result.contactHaveStatus([
  { name: "Nunzin", message: "Never Stop!" },
  { name: "James", message: "Umberella!" },
]);
