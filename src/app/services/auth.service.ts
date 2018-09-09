import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { BehaviorSubject, Observable } from "rxjs/index";
import { map } from "rxjs/internal/operators";
import { of } from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth_url: string = environment.auth_url;
  private _token: string;
  public keyToken = localStorage.getItem('token');
  private isLogin = new BehaviorSubject<string>(this.keyToken);
  public isLoginEvent = this.isLogin.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  public get isAuth() {
    return this._token || localStorage.getItem('token');
  }

  private set token(token) {
    this._token = token;
    localStorage.setItem('token', token);
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post(`${this.auth_url}/login`, {email, password}, {responseType: "text"}).pipe(
      map((res: string): boolean => {
        this.token = res;
        return true;
      })
    );
  }

  logout(key) {
    localStorage.removeItem(key);
    this.emitIsLoginEvent('');
    return of(true);
  }

  register(email: string, name: string, password: string): Observable<boolean> {
    return this.http.post(`${this.auth_url}/signup`, {email, name, password}, {responseType: "text"}).pipe(
      map((res:string): boolean => {
        this.token = res;
        return true;
      })
    );
  }

  emitIsLoginEvent(key: string): void {
    this.isLogin.next(key);
  }

}
