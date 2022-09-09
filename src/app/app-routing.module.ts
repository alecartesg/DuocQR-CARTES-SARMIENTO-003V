import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'dash-profesor',
    loadChildren: () => import('./pages/dash-profesor/dash-profesor.module').then( m => m.DashProfesorPageModule)
  },
  {
    path: 'dash-estudiante',
    loadChildren: () => import('./pages/dash-estudiante/dash-estudiante.module').then( m => m.DashEstudiantePageModule)
  },
  {
    path: 'registro-profesor',
    loadChildren: () => import('./pages/registro-profesor/registro-profesor.module').then( m => m.RegistroProfesorPageModule)
  },
  {
    path: 'registro-estudiante',
    loadChildren: () => import('./pages/registro-estudiante/registro-estudiante.module').then( m => m.RegistroEstudiantePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'leer-qr',
    loadChildren: () => import('./pages/leer-qr/leer-qr.module').then( m => m.LeerQRPageModule)
  },
  {
    path: 'generar-qr',
    loadChildren: () => import('./pages/generar-qr/generar-qr.module').then( m => m.GENERARQRPageModule)
  },
  {
    path: 'asistencia-profesor',
    loadChildren: () => import('./pages/asistencia-profesor/asistencia-profesor.module').then( m => m.AsistenciaProfesorPageModule)
  },
  {
    path: 'asistencia-alumno',
    loadChildren: () => import('./pages/asistencia-alumno/asistencia-alumno.module').then( m => m.AsistenciaAlumnoPageModule)
  },  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
