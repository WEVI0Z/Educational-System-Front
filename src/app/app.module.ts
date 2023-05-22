import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from "./user/user.module";
import { AuthorizationModule } from "./authorization/authorization.module";
import { SharedModule } from "./shared/shared.module";
import { HttpClientModule } from "@angular/common/http"
import { AdminModule } from "./admin/admin.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AdminModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AuthorizationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
