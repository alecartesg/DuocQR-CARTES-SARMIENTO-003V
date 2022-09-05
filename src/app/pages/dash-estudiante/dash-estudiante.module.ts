import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashEstudiantePageRoutingModule } from './dash-estudiante-routing.module';

import { DashEstudiantePage } from './dash-estudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashEstudiantePageRoutingModule
  ],
  declarations: [DashEstudiantePage]
})
export class DashEstudiantePageModule {}
