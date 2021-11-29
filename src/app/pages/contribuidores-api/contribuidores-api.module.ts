import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContribuidoresApiPageRoutingModule } from './contribuidores-api-routing.module';

import { ContribuidoresApiPage } from './contribuidores-api.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContribuidoresApiPageRoutingModule
  ],
  declarations: [ContribuidoresApiPage]
})
export class ContribuidoresApiPageModule {}
