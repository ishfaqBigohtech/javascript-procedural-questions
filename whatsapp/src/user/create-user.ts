// Create a whats app as following

// User can post status

export interface UserInterface {
  id: number;
  name: string;
  hasStatus: boolean;
}

class User {
  constructor() {}

  createUser(user: UserInterface): UserInterface {
    return {
      id: user.id,
      name: user.name,
      hasStatus: user.hasStatus,
    };
  }
}

export default new User();
