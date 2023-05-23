import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import { RouterModule, Routes } from "@angular/router";
import { authGuard } from "../authorization/guards/auth.guard";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: "",
    canActivate: [authGuard],
    component: LibraryComponent,
  },
  {
    path: ":category",
    canActivate: [authGuard],
    component: LibraryComponent
  }
]

@NgModule({
  declarations: [
    LibraryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class LibraryModule { }
