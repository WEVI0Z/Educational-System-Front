import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./main.component";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

const routes: Routes = [{
  path: "",
  component: MainComponent,
}]

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class MainModule { }
