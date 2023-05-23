import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, switchMap, tap } from "rxjs";
import { AuthorizationService } from "src/app/authorization/services/authorization.service";
import { Statistic } from "src/app/shared/interfaces/statistic.interface";

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  url: string = "http://localhost:3000";

  constructor(
    private http: HttpClient,
    private authService: AuthorizationService,
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  public get(take: number = 0, offset: number = 0): Observable<Statistic[]> {
    return this.http.get<Statistic[]>(
      `${this.url}/stats?take=${take}&offset=${offset}`,
      {responseType: "json"}
    );
  }

  public create(documentId: number) {
    this.authService.checkToken().pipe(
      switchMap(user => this.http.post(this.url + "/stats", {userId: user.id, documentId}))
    ).subscribe();
  }
}
