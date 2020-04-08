import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivacypolicyComponent } from './privacypolicy.component';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: PrivacypolicyComponent }]),
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule
  ],
  declarations: [PrivacypolicyComponent]
})
export class PrivacypolicyModule {}
