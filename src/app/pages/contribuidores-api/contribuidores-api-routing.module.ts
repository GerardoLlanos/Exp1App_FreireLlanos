import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContribuidoresApiPage } from './contribuidores-api.page';

const routes: Routes = [
  {
    path: '',
    component: ContribuidoresApiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContribuidoresApiPageRoutingModule {}
