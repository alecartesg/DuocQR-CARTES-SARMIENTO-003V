import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GENERARQRPage } from './generar-qr.page';

const routes: Routes = [
  {
    path: '',
    component: GENERARQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GENERARQRPageRoutingModule {}
