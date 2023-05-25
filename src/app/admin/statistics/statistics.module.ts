import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StatisticsComponent } from "./statistics.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { adminGuard } from "src/app/authorization/guards/admin.guard";

@NgModule({
  declarations: [
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([{
      path: "",
      canActivate: [adminGuard],
      component: StatisticsComponent
    }])
  ],
  exports: [
    RouterModule
  ]
})
export class StatisticsModule { }
