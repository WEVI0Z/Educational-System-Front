import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { DocumentsService } from "../admin/documents/documents.service";
import { Document } from "../shared/interfaces/documents.interface";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent {
  documents: Observable<Document[]> = this.documentsService.get();

  constructor(
    private documentsService: DocumentsService,
  ) {}
}
