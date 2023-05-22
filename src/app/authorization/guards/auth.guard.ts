import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { AuthorizationService } from "../services/authorization.service";
import { EMPTY, Observable, catchError, map } from "rxjs";

@Injectable({
  providedIn: "root"
})
class PermissionsService {
  constructor(
    private authService: AuthorizationService
  ) {}

  canActivate(): Observable<boolean> {
    return this.authService.checkToken().pipe(
      catchError(() => EMPTY),
      map(() => true),
    )
  }
}

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(PermissionsService).canActivate();
};
