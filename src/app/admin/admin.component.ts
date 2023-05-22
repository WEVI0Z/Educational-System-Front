import { Component } from '@angular/core';
import { DocumentsService } from "./documents/documents.service";
import { Observable } from "rxjs";
import { Document } from "../shared/interfaces/documents.interface";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  documents: Observable<Document[]> = this.documentsService.get("", 6);

  constructor(
    private documentsService: DocumentsService,
  ) {}
}
