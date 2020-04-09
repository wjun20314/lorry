import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesrptPage } from './salesrpt.page';

const routes: Routes = [
  {
    path: '',
    component: SalesrptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesrptPageRoutingModule {}
