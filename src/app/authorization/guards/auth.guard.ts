import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { AuthorizationService } from "../services/authorization.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
class PermissionsService {
  constructor(
    private authService: AuthorizationService,
  ) {}

  canActivate(): Observable<boolean> {
    return this.authService.isAuthorized();
  }
}

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(PermissionsService).canActivate();
};
