import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChgpwdComponent } from './chgpwd.component';
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
      ReactiveFormsModule,
      RouterModule.forChild([{ path: '', component: ChgpwdComponent }]),
      MatInputModule,
      MatIconModule,
      MatFormFieldModule,
      MatCardModule
    ],
    declarations: [ChgpwdComponent]
})
export class ChgpwdModule {}