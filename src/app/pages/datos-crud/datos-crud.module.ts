import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosCrudPageRoutingModule } from './datos-crud-routing.module';

import { DatosCrudPage } from './datos-crud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosCrudPageRoutingModule
  ],
  declarations: [DatosCrudPage]
})
export class DatosCrudPageModule {}
