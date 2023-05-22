import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Document } from "src/app/shared/interfaces/documents.interface";
import { DocumentsService } from "./documents.service";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private documentsService: DocumentsService,
    private http: HttpClient,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
      ]),
      category: new FormControl(null, [
        Validators.required,
      ]),
      file: new FormControl(null, [
        Validators.required,
      ]),
    })
  }

  submit() {
    const file = (<HTMLInputElement>document.getElementById("file")).files![0];

    const doc: Document = {
      title: this.form.value["title"],
      category: this.form.value["category"],
      createdAt: new Date(),
      file,
    }
    
    this.documentsService.create(doc).subscribe();
  }
}
