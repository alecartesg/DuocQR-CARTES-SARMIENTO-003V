import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashProfesorPage } from './dash-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: DashProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashProfesorPageRoutingModule {}
