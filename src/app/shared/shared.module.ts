import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from "@angular/router";
import { DocumentComponent } from './document/document.component';
import { StatComponent } from './stat/stat.component';
import { LoaderComponent } from './loader/loader.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DocumentComponent,
    StatComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DocumentComponent,
    StatComponent,
    LoaderComponent,
  ]
})
export class SharedModule { }
