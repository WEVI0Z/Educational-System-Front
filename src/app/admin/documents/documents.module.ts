import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsComponent } from './documents.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    DocumentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: "",
      component: DocumentsComponent,
    }]),
  ],
  exports: [
    RouterModule
  ]
})
export class DocumentsModule { }
