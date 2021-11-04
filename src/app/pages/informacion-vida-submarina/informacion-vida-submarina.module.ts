import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacionVidaSubmarinaPageRoutingModule } from './informacion-vida-submarina-routing.module';

import { InformacionVidaSubmarinaPage } from './informacion-vida-submarina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacionVidaSubmarinaPageRoutingModule
  ],
  declarations: [InformacionVidaSubmarinaPage]
})
export class InformacionVidaSubmarinaPageModule {}
