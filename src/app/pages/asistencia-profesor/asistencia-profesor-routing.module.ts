import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsistenciaProfesorPage } from './asistencia-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: AsistenciaProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsistenciaProfesorPageRoutingModule {}
