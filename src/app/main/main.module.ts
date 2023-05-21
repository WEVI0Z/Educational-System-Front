import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from "@angular/router";
import { authGuard } from "../authorization/guards/auth.guard";

const routes: Routes = [{
  path: "",
  canActivate: [authGuard],
  component: MainComponent,
}]

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class MainModule { }
