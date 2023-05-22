import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from "./user/user.component";

const routes: Routes = [
  {
    path: "user",
    loadChildren: () =>  import("./user/user.module").then(m => m.UserModule),
  },
  {
    path: "admin",
    loadChildren: () =>  import("./admin/admin.module").then(m => m.AdminModule),
  },
  {
    path: "main",
    pathMatch: "full",
    loadChildren: () =>  import("./main/main.module").then(m => m.MainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
