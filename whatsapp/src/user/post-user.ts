import user, { UserInterface } from "./create-user";

class PostUser {
  user!: UserInterface;
  constructor() {
    this.postUser();
  }

  postUser() {
    this.user = user.createUser({
      id: 3,
      name: "Linda",
      hasStatus: true,
    });
  }
}
export default new PostUser();
