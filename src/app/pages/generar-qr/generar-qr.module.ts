import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GENERARQRPageRoutingModule } from './generar-qr-routing.module';

import { GENERARQRPage } from './generar-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GENERARQRPageRoutingModule
  ],
  declarations: [GENERARQRPage]
})
export class GENERARQRPageModule {}
