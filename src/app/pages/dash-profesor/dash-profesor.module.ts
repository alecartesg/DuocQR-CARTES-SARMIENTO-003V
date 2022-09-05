import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashProfesorPageRoutingModule } from './dash-profesor-routing.module';

import { DashProfesorPage } from './dash-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashProfesorPageRoutingModule
  ],
  declarations: [DashProfesorPage]
})
export class DashProfesorPageModule {}
