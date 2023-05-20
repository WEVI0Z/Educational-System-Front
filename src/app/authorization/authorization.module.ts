import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationService } from "./services/authorization.service";

@NgModule({
  providers: [AuthorizationService],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AuthorizationModule { }
