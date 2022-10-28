import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Formulario2PageRoutingModule } from './formulario2-routing.module';

import { Formulario2Page } from './formulario2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Formulario2PageRoutingModule
  ],
  declarations: [Formulario2Page]
})
export class Formulario2PageModule {}
