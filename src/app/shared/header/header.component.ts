import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { EMPTY, Observable, catchError, map } from "rxjs";
import { AuthorizationService } from "src/app/authorization/services/authorization.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    protected authService: AuthorizationService,
    protected router: Router,
  ) {}

  protected authorized: Observable<boolean> = this.authService.checkToken().pipe(
    catchError(() => EMPTY),
    map(() => true)
  )

  protected logout = this.authService.logout;
}
