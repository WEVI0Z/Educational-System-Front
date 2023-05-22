import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Observable, catchError, EMPTY, map } from "rxjs";
import { AuthorizationService } from "src/app/authorization/services/authorization.service";

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(
    protected authService: AuthorizationService,
    protected router: Router,
  ) {}

  protected authorized: Observable<boolean> = this.authService.checkToken().pipe(
    catchError(() => EMPTY),
    map(() => true)
  )

  protected logout = this.authService.logout
}
