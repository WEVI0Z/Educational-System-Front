import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { EMPTY, Observable, catchError, map } from "rxjs";
import { Token } from "src/app/shared/interfaces/token.intarface";
import { User } from "src/app/shared/interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  url: string = "http://localhost:3000";
  token: string | null = localStorage.getItem("token");

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  testConnection(): Observable<string> {
    return this.http.get(this.url, {...this.httpOptions, responseType: "text"});
  }

  register(user: User): Observable<Token | HttpErrorResponse> {
    return this.http.post<Token>(this.url + "/users", user, {...this.httpOptions, responseType: "json"}).pipe(
      catchError((err: HttpErrorResponse) => {
        if(err.status === 400 || err.status === 422) {
          this.router.navigate(["/user/register"], {
            queryParams: {error: err.statusText}
          });
        }
        
        return EMPTY;
      }),
      map(data => {
        this.router.navigate(["/main"]);

        this.token = data.name

        return data;
      })
    );
  }

  login(login: string, password: string): Observable<Token | HttpErrorResponse> {
    return this.http.post<Token>(this.url + "/users/login", {login, password}, {...this.httpOptions, responseType: "json"}).pipe(
      catchError((err: HttpErrorResponse) => {
        if(err.status === 404) {
          this.router.navigate(["/user/login"], {
            queryParams: {error: "Неправильный логин или пароль"}
          });
        }

        return EMPTY;
      }),
      map(data => {
        this.router.navigate(["/main"]);

        this.token = data.name;

        return data;
      })
    );
  }

  checkToken(): Observable<User | HttpErrorResponse | Error> {
    if(this.token) {
      return this.http.get<User>(this.url + "/users/token", {
        headers: {"token": this.token},
        responseType: "json",
      }).pipe(
        catchError((err: HttpErrorResponse) => {
          this.router.navigate(["/user/login"], {
            queryParams: {error: "Авторизационный токен просрочен"}
          });

          return EMPTY;
        })
      );
    }

    this.router.navigate(["/main"], {
      queryParams: {error: "Необходима авторизация"}
    });

    this.token = null

    return new Observable();
  }
}
