import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SummaryrptPageRoutingModule } from './summaryrpt-routing.module';

import { SummaryrptPage } from './summaryrpt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SummaryrptPageRoutingModule
  ],
  declarations: [SummaryrptPage]
})
export class SummaryrptPageModule {}
