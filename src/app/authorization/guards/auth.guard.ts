import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthorizationService } from "../services/authorization.service";
import { EMPTY, Observable, catchError, map, tap } from "rxjs";

@Injectable({
  providedIn: "root"
})
class PermissionsService {
  constructor(
    private authService: AuthorizationService,
    private router: Router,
  ) {}

  canActivate(): Observable<boolean> {
    return this.authService.checkToken().pipe(
      catchError(() => {
        this.router.navigate(["/user/login"], {
          queryParams: {error: "Авторизационный токен просрочен"}
        });

        return EMPTY;
      }),
      map(() => true),
    )
  }
}

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(PermissionsService).canActivate();
};
