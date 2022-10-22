import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogoutpPage } from './logoutp.page';

const routes: Routes = [
  {
    path: '',
    component: LogoutpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogoutpPageRoutingModule {}
