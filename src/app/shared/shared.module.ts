import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from "@angular/router";
import { DocumentComponent } from "./document/document.component";
import { StatComponent } from "./stat/stat.component";
import { LoaderComponent } from "./loader/loader.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DocumentSmartComponent } from "./document/document-smart.component";
import { HeaderSmartComponent } from "./header/header-smart.component";
import { FooterSmartComponent } from "./footer/footer-smart.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DocumentComponent,
    StatComponent,
    HeaderSmartComponent,
    LoaderComponent,
    DocumentSmartComponent,
    FooterSmartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderSmartComponent,
    FooterComponent,
    DocumentSmartComponent,
    FooterSmartComponent,
    StatComponent,
    LoaderComponent,
  ]
})
export class SharedModule { }
