import { IUser } from '@test-poc/data';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers(): IUser[] {
    return [{
      name: "Jack",
      age: 24
    }];
  }

  getUser(id: string): IUser {
    return {
      name: id,
      age: 24
    };
  }
}
