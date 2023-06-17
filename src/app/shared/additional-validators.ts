import { Inject, Injectable } from "@angular/core";
import { AbstractControl, ValidatorFn } from "@angular/forms";

@Injectable({providedIn: "root"})
export class AdditionalValidators {
    passwordMatch(): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} | null => {
            const password = control.get("password");
            const passwordRepeat = control.get("passwordConfirmation");

            return password?.value !== passwordRepeat?.value ? {"passwordMismatch": true} : null;
        }
    }
}