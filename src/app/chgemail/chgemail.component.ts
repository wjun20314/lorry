import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-chgemail',
  templateUrl: './chgemail.page.html',
  styleUrls: ['./chgemail.page.scss'],
})
export class ChgemailComponent implements OnInit {
  
  ngOnInit(): void {

  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a email';
    }

    return this.email.hasError('email') ? 'Not a valid email. Hint: email@gmail.com' : '';
  }

  emailFormSubmit() {
    console.log("submit button click :: " + this.email.value);
  }
}
