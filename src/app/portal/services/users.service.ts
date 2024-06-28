import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  getUsersData() {
    return [
      {
        username: 'pulse',
        fullname: 'Usuario normal',
        password: 'pulse',
        role: 'user',
      },
      {
        username: 'super',
        fullname: 'Usuario Administrador',
        password: 'super',
        role: 'admin',
      },
    ];
  }

  getUsers() {
    return Promise.resolve(this.getUsersData());
  }
}
