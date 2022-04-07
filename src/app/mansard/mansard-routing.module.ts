import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MansardPage } from './mansard.page';

const routes: Routes = [
  {
    path: '',
    component: MansardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MansardPageRoutingModule {}
