import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalesrptPageRoutingModule } from './salesrpt-routing.module';

import { SalesrptPage } from './salesrpt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalesrptPageRoutingModule
  ],
  declarations: [SalesrptPage]
})
export class SalesrptPageModule {}
