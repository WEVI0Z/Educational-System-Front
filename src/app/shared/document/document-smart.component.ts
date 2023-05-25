import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DocumentsService } from "src/app/admin/documents/documents.service";
import { StatisticsService } from "src/app/admin/statistics/statistics.service";
import { DocumentUpdate } from "src/app/shared/interfaces/documents.interface";

@Component({
  selector: 'app-document-smart',
  template: `<app-document
                [title]="title"
                [file]="file"
                [createdAt]="createdAt"
                [category]="category"
                [id]="id"
                [isAdmin]="isAdmin"
                [reduct]="reduct"
                [form]="form"
                [createStat]="createStat"
                [change]="change"
                [submit]="submit"
            ></app-document>`,
})
export class DocumentSmartComponent implements OnInit {
  @Input()
  title!: string;

  @Input()
  file!: string;

  @Input()
  createdAt!: Date;

  @Input()
  category!: string;

  @Input()
  id!: number;

  @Input()
  isAdmin: boolean = false;

  reduct: boolean = false;
  form!: FormGroup;

  constructor(
    private statisticsService: StatisticsService,
    private documentsService: DocumentsService
  ) {}

  createStat(documentId: number) {
    this.statisticsService.create(documentId);
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
      ]),
      category: new FormControl(null, [
        Validators.required,
      ]),
    })
  }

  change() {
    this.reduct = !this.reduct;

    this.form.get("title")?.setValue(this.title);
    this.form.get("category")?.setValue(this.category);
  }
  
  submit() {
    this.reduct = false;

    this.title = this.form.get("title")?.value;
    this.category = this.form.get("category")?.value;

    const doc: DocumentUpdate = {
      id: this.id,
      title: this.title,
      category: this.category
    }

    this.documentsService.update(doc).subscribe();
  }
}
