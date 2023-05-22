import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { EMPTY, Observable, catchError, map } from "rxjs";
import { Document } from "src/app/shared/interfaces/documents.interface";

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  documents: Observable<Document[]> = new Observable().pipe(map(() => []));
  url: string = "http://localhost:3000";

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private dateZeroAdder(number: number): string {
    return number > 10 ? "" + number : "0" + number;
  }

  private formDataDateParser(date: Date): string {
    const year = date.getFullYear();
    const month = this.dateZeroAdder(date.getMonth() + 1);
    const day = this.dateZeroAdder(date.getDate());

    const hours = this.dateZeroAdder(date.getHours()); 
    const minutes = this.dateZeroAdder(date.getMinutes());
    const seconds = this.dateZeroAdder(date.getSeconds());

    console.log(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  public create(body: Document): Observable<Document> {
    const formData = new FormData()

    formData.append("file", body.file);
    formData.append("title", body.title);
    formData.append("category", body.category);
    formData.append("createdAt", this.formDataDateParser(body.createdAt));

    return this.http.post<Document>(
      this.url + "/documents",
      formData
      ).pipe(
      catchError(e => {
        console.log(e);
        return EMPTY
      }),
      map(data => {
        console.log(data);
        return data;
      })
    );
  }
}