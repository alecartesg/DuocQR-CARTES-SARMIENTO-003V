import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroEstudiantePageRoutingModule } from './registro-estudiante-routing.module';

import { RegistroEstudiantePage } from './registro-estudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroEstudiantePageRoutingModule
  ],
  declarations: [RegistroEstudiantePage]
})
export class RegistroEstudiantePageModule {}
