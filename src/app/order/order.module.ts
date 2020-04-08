import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderComponent } from './order.component';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: OrderComponent }]),
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatSnackBarModule
  ],
  declarations: [OrderComponent]
})
export class OrderModule {}
