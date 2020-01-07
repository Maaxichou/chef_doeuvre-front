import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../entity/user";
import { tap, switchMap } from "rxjs/operators";
import { Observable, BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private url = "http://localhost:8000/api/auth";

  public user:BehaviorSubject<User> = new BehaviorSubject(null);
  constructor(private http:HttpClient) { }

  addUser(user:User) {
    return this.http.post<User>(this.url, user);
  }

  login(username:string,password:string) {
    return this.http.post<{token:string}>("http://localhost:8000/api/login_check", {
      username,
      password
    }).pipe(
      tap(response => localStorage.setItem('token', response.token)),
      switchMap(() => this.getUser())
    )
  }

  logout() {
    localStorage.removeItem('token');
    this.user.next(null);
  }

  getUser() : Observable<User> {
    return this.http.get<User>(this.url).pipe(
      tap(user => this.user.next(user))
    );
  }

  emailExists(email:string) {
    return this.http.get<void>(this.url + '/' + email);
  }
}
