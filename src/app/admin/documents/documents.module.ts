import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DocumentsComponent } from "./documents.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DocumentsService } from "./documents.service";
import { adminGuard } from "src/app/authorization/guards/admin.guard";

@NgModule({
  providers: [
    DocumentsService,
  ],
  declarations: [
    DocumentsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: "",
      canActivate: [adminGuard],
      component: DocumentsComponent,
    }]),
  ],
  exports: [
    RouterModule,
  ]
})
export class DocumentsModule { }
