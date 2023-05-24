import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from "./authorization/guards/admin.guard";
import { authGuard } from "./authorization/guards/auth.guard";

const routes: Routes = [
  {
    path: "user",
    loadChildren: () =>  import("./user/user.module").then(m => m.UserModule),
  },
  {
    path: "admin",
    canActivate: [authGuard, adminGuard],
    loadChildren: () =>  import("./admin/admin.module").then(m => m.AdminModule),
  },
  {
    path: "library",
    canActivate: [authGuard],
    loadChildren: () =>  import("./library/library.module").then(m => m.LibraryModule),
  },
  {
    path: "main",
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
