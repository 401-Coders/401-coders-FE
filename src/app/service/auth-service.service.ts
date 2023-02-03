import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  isLoggedIn() {
    return this.getToken() != null;
  }

  login({ email, password }: any): Observable<any> {
    let randomString = function () {
      return Math.random().toString(36).substr(2); 
    };
    let token = function () {
      return randomString() + randomString() + randomString() + "-" + randomString() + randomString() + randomString(); // to make it longer
    };
    
    if (email === 'admin@gmail.com' && password === "admin123") {
      this.setToken(token());
      return of({ name: 'Thtpl', email: 'thinkitive@gmail.com' });
    }
    return throwError(new Error('Failed to login'));
  }

}
