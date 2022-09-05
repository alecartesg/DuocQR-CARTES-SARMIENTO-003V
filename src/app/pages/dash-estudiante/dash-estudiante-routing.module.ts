import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashEstudiantePage } from './dash-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: DashEstudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashEstudiantePageRoutingModule {}
