import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/User.model';
import { UsersService } from './users.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private authenticatedSource = new Subject<boolean>();

  authenticated$ = this.authenticatedSource.asObservable();

  constructor(private usersService: UsersService, private router: Router) { }

  isAuthenticated() {
    if (localStorage.getItem('username')) {
      if (localStorage.getItem('username')!.length > 0) {
        return true;
      }
    }
    return false;
  }
  isAdmin() {
    if (localStorage.getItem('role')) {
      if (localStorage.getItem('role') === 'admin') {
        return true;
      }
    }
    return false;
  }

  async authenticate(userName: String, passWord: String): Promise<boolean> {
    var users: User[];
    return this.usersService.getUsers().then((data) => {
      users = data;
      let user = users!.filter(function (user: User) {
        return user.username === userName, user.password === passWord;
      });

      if (user.length > 0) {
        localStorage.setItem('username', user[0].username!);
        localStorage.setItem('role', user[0].role!);
        this.authenticatedSource.next(true);
        return true;
      }
      return false;
    });
  }
  signout() {
    this.authenticatedSource.next(false);
    localStorage.removeItem('username');
    localStorage.removeItem('role');
  }
}
