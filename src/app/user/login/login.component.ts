import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { AuthorizationService } from "src/app/authorization/services/authorization.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  error: string | undefined;

  constructor(
    private authService: AuthorizationService,
    private route: ActivatedRoute,
  ) {}
  
  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl(null, [
        Validators.required,
      ]),
      password: new FormControl(null, [
        Validators.required,
      ]),
    });

    this.route.queryParams.subscribe(params => this.error = params["error"]);
  }

  submit() {
    this.authService.login(
      this.form.value["login"],
      this.form.value["password"]
    ).subscribe();
  }
}
