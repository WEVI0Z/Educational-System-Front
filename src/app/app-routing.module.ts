import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: "library",
    loadChildren: () =>  import("./library/library.module").then(m => m.LibraryModule),
  },
  {
    path: "main",
    pathMatch: "full",
    loadChildren: () =>  import("./main/main.module").then(m => m.MainModule),
  },
  {
    path: "**",
    redirectTo: "/main"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
