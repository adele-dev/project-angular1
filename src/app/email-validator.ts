import { AbstractControl, ValidationErrors } from '@angular/forms';


export function emailValidator(control: AbstractControl): ValidationErrors | null {

    // Email Format required

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const valid = emailRegex.test(control.value);


    const errors = {

        email: {

            rules: "L'email n'est pas au bon format"

        }

    };


    return !valid ? errors : null;

}