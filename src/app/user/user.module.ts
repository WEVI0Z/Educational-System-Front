import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterModule } from "./register/register.module";
import { LoginModule } from "./login/login.module";
import { UserRoutingModule } from "./user-routing.module";
import { AuthorizationModule } from "../authorization/authorization.module";
import { ReactiveFormsModule } from "@angular/forms";
import { UserComponent } from './user.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RegisterModule,
    LoginModule,
    UserRoutingModule
  ]
})
export class UserModule { }
