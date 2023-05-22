import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from "@angular/router";
import { DocumentComponent } from './document/document.component';
import { StatComponent } from './stat/stat.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DocumentComponent,
    StatComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DocumentComponent,
    StatComponent
  ]
})
export class SharedModule { }
