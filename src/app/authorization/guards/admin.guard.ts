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
    return this.authService.isAdmin().pipe(
      catchError(() => {
        this.router.navigate(["/main"], {
          queryParams: {error: "Недостаточно прав"}
        });

        console.log("gello");

        return EMPTY;
      })
    )
  }
}

export const adminGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(PermissionsService).canActivate();
};
