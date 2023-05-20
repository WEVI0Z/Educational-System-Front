import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationService } from "./services/authorization.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  providers: [AuthorizationService],
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class AuthorizationModule { }
