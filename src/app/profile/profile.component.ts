import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfileComponent {

  name = new FormControl('', Validators.required);
  getNameErrorMsg() {
    if (this.name.hasError('required')) {
      return 'You must enter your name';
    }
  }

  gender = new FormControl('', Validators.required);
  getGenderErrorMsg() {
    if (this.gender.hasError('required')) {
      return 'Please select gender';
    }
  }

  ic = new FormControl('', Validators.required);
  getIcErrorMsg() {
    if (this.ic.hasError('required')) {
      return 'You must enter a valid IC number';
    }
  }

  conNo = new FormControl('', Validators.required);
  getConNoErrorMsg() {
    if (this.conNo.hasError('required')) {
      return 'You must enter your contact number';
    }
  }

  address = new FormControl('', Validators.required);
  getAddressErrorMsg() {
    if (this.address.hasError('required')) {
      return 'You must enter valid address';
    }
  }

  profileFormSubmit() {
    console.log(this.ic.value);
    console.log(this.gender.value);
  }
}
// export class SegmentExample {
//   segmentChanged(ev: any) {
//     console.log('Segment changed ', ev);
//   }
// }