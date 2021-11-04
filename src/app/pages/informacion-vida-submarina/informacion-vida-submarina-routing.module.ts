import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacionVidaSubmarinaPage } from './informacion-vida-submarina.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionVidaSubmarinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionVidaSubmarinaPageRoutingModule {}
