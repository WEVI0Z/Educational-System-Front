import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: "",
      component: StatisticsModule
    }])
  ],
  exports: [
    RouterModule
  ]
})
export class StatisticsModule { }
