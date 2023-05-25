import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthorizationService } from "src/app/authorization/services/authorization.service";

@Component({
  selector: 'header-smart-component',
  template: `
    <header-component
        [authorized]="authorized"
        [admin]="admin"
        [logout]="logout"
    >
    </header-component>
    `
})
export class HeaderSmartComponent {
    protected authorized: Observable<boolean> = this.authService.isAuthorized();

    protected admin: Observable<boolean> = this.authService.isAdmin();

    constructor(
        protected authService: AuthorizationService,
        protected router: Router,
    ) {}

    protected logout() {
        this.authService.logout();
    }
}
