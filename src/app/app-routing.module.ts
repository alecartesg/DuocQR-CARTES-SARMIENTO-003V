import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresoEGuard } from './guards/ingreso-e.guard';
import { IngresoPGuard } from './guards/ingreso-p.guard';
import { NoIngresadoGuard } from './guards/no-ingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then( m => m.LogoutPageModule),
    canActivate: [IngresoEGuard] 
  },
  {
    path: 'dash-profesor',
    loadChildren: () => import('./pages/dash-profesor/dash-profesor.module').then( m => m.DashProfesorPageModule),
    canActivate: [IngresoPGuard]
  },
  {
    path: 'dash-estudiante',
    loadChildren: () => import('./pages/dash-estudiante/dash-estudiante.module').then( m => m.DashEstudiantePageModule),
    canActivate: [IngresoEGuard]
  },
  {
    path: 'generar-qr',
    loadChildren: () => import('./pages/generar-qr/generar-qr.module').then( m => m.GenerarQrPageModule),
    canActivate: [IngresoPGuard]
  },
  {
    path: 'leer-qr',
    loadChildren: () => import('./pages/leer-qr/leer-qr.module').then( m => m.LeerQRPageModule),
    canActivate: [IngresoEGuard]
  },
  {
    path: 'logoutp',
    loadChildren: () => import('./pages/logoutp/logoutp.module').then( m => m.LogoutpPageModule),
    canActivate: [IngresoPGuard]
  },
  {
    path: 'api',
    loadChildren: () => import('./pages/api/api.module').then( m => m.ApiPageModule)
  },
  {
    path: 'formulario2',
    loadChildren: () => import('./pages/formulario2/formulario2.module').then( m => m.Formulario2PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
