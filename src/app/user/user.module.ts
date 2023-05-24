import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterModule } from "./register/register.module";
import { LoginModule } from "./login/login.module";
import { UserRoutingModule } from "./user-routing.module";
import { UserComponent } from './user.component';
import { SharedModule } from "../shared/shared.module";
import { InfoModule } from "./info/info.module";

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RegisterModule,
    LoginModule,
    UserRoutingModule,
    InfoModule
  ]
})
export class UserModule { }
