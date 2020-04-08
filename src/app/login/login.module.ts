import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";

@NgModule({
    imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      RouterModule.forChild([{ path: '', component: LoginComponent }]),
      MatInputModule,
      MatIconModule,
      MatFormFieldModule,
      MatCardModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule {}