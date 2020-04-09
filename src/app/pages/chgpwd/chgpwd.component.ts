import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-chgpwd',
  templateUrl: './chgpwd.page.html',
  styleUrls: ['./chgpwd.page.scss'],
})
export class ChgpwdComponent {
  oldpwd = new FormControl('', [Validators.required, Validators.minLength(6)]);
  getOldPwdErrorMsg() {
    if (this.oldpwd.hasError('required')) {
      return 'You must enter a old password';
    }

    return this.oldpwd.hasError('minlength') ? 'Minimun 6 characters' : '';
  }

  newpwd = new FormControl('', [Validators.required, Validators.minLength(6)]);
  getNewPwdErrorMsg() {
    if (this.newpwd.hasError('required')) {
      return 'You must enter a new password';
    }

    return this.newpwd.hasError('minlength') ? 'Minimun 6 characters' : '';
  }

  conpwd = new FormControl('', [Validators.required, Validators.minLength(6)]);
  getConPwdErrorMsg() {
    if (this.conpwd.hasError('required')) {
      return 'You must enter password same with new password';
    }

    return this.conpwd.hasError('minlength') ? 'Minimun 6 characters' : '';
  }

  chgpwdFormSubmit() {
    console.log(this.oldpwd.value);
    console.log(this.newpwd.value);
    console.log(this.conpwd.value);
  }
}
export class FormFieldPrefixSuffixExample {
  on = true;
  open = true;
  show = true;
}

