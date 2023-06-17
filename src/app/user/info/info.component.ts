import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthorizationService } from "src/app/authorization/services/authorization.service";
import { UpdateUser, User } from "src/app/shared/interfaces/user.interface";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.scss"]
})
export class InfoComponent implements OnInit {
  user?: User;
  form!: FormGroup;
  reduct: boolean = false;

  constructor(
    private authService: AuthorizationService,
  ) {}

  ngOnInit(): void {
    this.authService.checkToken().subscribe(user => {
      this.user = user;
    });

    this.form = new FormGroup({
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

  change() {
    this.reduct = !this.reduct;

    this.form.get("firstName")?.setValue(this.user?.firstName);
    this.form.get("middleName")?.setValue(this.user?.middleName);
    this.form.get("lastName")?.setValue(this.user?.lastName);
  }

  submit() {
    this.user!.firstName = this.form.value["firstName"];
    this.user!.lastName = this.form.value["lastName"];
    this.user!.middleName = this.form.value["middleName"];

    const updateUser: UpdateUser = {
      id: this.user!.id!,
      login: this.user!.login,
      email: this.user!.email,
      lastName: this.user!.lastName,
      middleName: this.user!.middleName,
      firstName: this.user!.firstName,
    }

    this.authService.update(updateUser).subscribe();

    this.change();
  }

  delete() {
    if(this.user) {
      this.authService.delete(this.user.id!).subscribe();
    }
  }
}
