import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  url: string = "http://localhost:3000";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  testConnection(): Observable<string> {
    return this.http.get(this.url, {...this.httpOptions, responseType: "text"});
  }

  constructor(private http: HttpClient) { }
}
