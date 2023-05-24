import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import { RouterModule } from "@angular/router";
import { authGuard } from "src/app/authorization/guards/auth.guard";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    InfoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([{
      path: "",
      canActivate: [authGuard],
      component: InfoComponent
    }])
  ]
})
export class InfoModule { }
