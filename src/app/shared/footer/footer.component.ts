import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthorizationService } from "src/app/authorization/services/authorization.service";

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input()
  authorized!: Observable<boolean>;

  @Input()
  admin!: Observable<boolean>;

  @Input()
  logout!: Function;
  
  constructor(
    protected authService: AuthorizationService,
    protected router: Router,
  ) {}
}
