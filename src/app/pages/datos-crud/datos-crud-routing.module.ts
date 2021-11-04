import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosCrudPage } from './datos-crud.page';

const routes: Routes = [
  {
    path: '',
    component: DatosCrudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosCrudPageRoutingModule {}
