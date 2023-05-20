import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from "src/app/authorization/services/authorization.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(
    private authService: AuthorizationService,
  ) {}
}
