import { Injectable } from '@angular/core';

const USERS_KEY = 'users';
const CURRENT_USER_KEY = 'currentUser';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private users: { username: string; password: string }[] = [];

  constructor() {
    const usersStr = localStorage.getItem(USERS_KEY);
    if (usersStr) {
      this.users = JSON.parse(usersStr);
    }
  }

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
      return true;
    }
    return false;
  }

  isAuthenticated(): boolean {
    // Проверка, есть ли текущий пользователь в localStorage
    return localStorage.getItem(CURRENT_USER_KEY) !== null;
  }

  // Остальные методы для сохранения и получения данных
}