import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  setToken$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string) {
    const url = `https://fakestoreapi.com/auth/login`;

    return this.httpClient
      .post(
        url,
        JSON.stringify({
          username,
          password,
        }),
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        }
      )
      .pipe(
        tap((res: any) => {
          this.setToken$.next(res.token);
        })
      );
  }
}
