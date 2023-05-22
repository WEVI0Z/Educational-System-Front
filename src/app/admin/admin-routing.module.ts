import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "",
        component: AdminComponent,
        children: [
            {
                path: "documents",
                loadChildren: () => import("./documents/documents.module").then(m => m.DocumentsModule),
            },
            {
                path: "statistics",
                loadChildren: () => import("./statistics/statistics.module").then(m => m.StatisticsModule),
            }
        ]
    }
]

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
