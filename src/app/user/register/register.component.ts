import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthorizationService } from "src/app/authorization/services/authorization.service";
import { User } from "src/app/shared/interfaces/user.interface";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private authService: AuthorizationService,
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl(null, [
        Validators.required,
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(null, [
        Validators.required,
      ]),
      passwordConfirmation: new FormControl(null, [
        Validators.required,
      ]),
      lastName: new FormControl(null, [
        Validators.required,
      ]),
      firstName: new FormControl(null, [
        Validators.required,
      ]),
      middleName: new FormControl(null, [
        Validators.required,
      ]),
    })
  }

  submit() {
    const user: User = {
      login: this.form.value["login"],
      email: this.form.value["email"],
      password: this.form.value["password"],
      firstName: this.form.value["firstName"],
      lastName: this.form.value["lastName"],
      middleName: this.form.value["middleName"],
    }

    this.authService.register(user).subscribe();
  }
}
