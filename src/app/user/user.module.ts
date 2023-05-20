import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterModule } from "./register/register.module";
import { LoginModule } from "./login/login.module";
import { UserRoutingModule } from "./user-routing.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RegisterModule,
    LoginModule,
    UserRoutingModule
  ]
})
export class UserModule { }
