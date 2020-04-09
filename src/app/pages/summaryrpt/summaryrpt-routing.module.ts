import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SummaryrptPage } from './summaryrpt.page';

const routes: Routes = [
  {
    path: '',
    component: SummaryrptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SummaryrptPageRoutingModule {}
