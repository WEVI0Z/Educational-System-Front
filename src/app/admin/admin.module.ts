import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { DocumentsModule } from "./documents/documents.module";
import { StatisticsModule } from "./statistics/statistics.module";
import { AdminRoutingModule } from "./admin-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule,
    DocumentsModule,
    StatisticsModule,
    CommonModule
  ]
})
export class AdminModule { }
