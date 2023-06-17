import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserComponent } from "./user.component";

const routes: Routes = [
  {
    path: "",
    component: UserComponent,
    children: [
      {
        path: "login",
        loadChildren: () => import("./login/login.module").then(m => m.LoginModule),
      },
      {
        path: "register",
        loadChildren: () => import("./register/register.module").then(m => m.RegisterModule),
      },
      {
        path: "info",
        loadChildren: () => import("./info/info.module").then(m => m.InfoModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }