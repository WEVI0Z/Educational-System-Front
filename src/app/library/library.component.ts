import { Component, OnInit } from '@angular/core';
import { Observable, debounce, interval, map, switchMap } from "rxjs";
import { DocumentsService } from "../admin/documents/documents.service";
import { Document } from "../shared/interfaces/documents.interface";
import { ActivatedRoute, Route } from "@angular/router";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent {
  param: string = "";
  documents: Observable<Document[]> = this.route.params.pipe(
    switchMap(params => this.documentsService.get(params["category"]))
  )
  allDocuments: Observable<Document[]> = this.documents;

  constructor(
    private documentsService: DocumentsService,
    private route: ActivatedRoute,
  ) {}

  protected searchByValue(value: string): void {
    this.documents = this.allDocuments.pipe(
      debounce(() => interval(200)),
      map(documents => documents.filter(doc => doc.title.includes(value)))
    )
  }
}
