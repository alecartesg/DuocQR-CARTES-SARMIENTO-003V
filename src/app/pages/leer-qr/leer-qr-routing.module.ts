import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeerQRPage } from './leer-qr.page';

const routes: Routes = [
  {
    path: '',
    component: LeerQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeerQRPageRoutingModule {}
