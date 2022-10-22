import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogoutpPageRoutingModule } from './logoutp-routing.module';

import { LogoutpPage } from './logoutp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogoutpPageRoutingModule
  ],
  declarations: [LogoutpPage]
})
export class LogoutpPageModule {}
