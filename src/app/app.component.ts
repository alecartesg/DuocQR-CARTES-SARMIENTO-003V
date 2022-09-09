import { Component } from '@angular/core';


interface Componente{

  icon: string;
  name: string;
  redirecTo: string;

}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  opciones : Componente[] = [
    {
      icon: 'log-out',
      name: 'Log-Out',
      redirecTo: '/inicio'
    },
    {
      icon: 'accessibility-outline',
      name: 'Asistencia',
      redirecTo: '/asistencia-profesor'
    },
    {
      icon: 'finger-print-outline',
      name: 'Generar-Qr',
      redirecTo: '/generar-qr'
    },
    {
      icon: 'finger-print-outline',
      name: 'Leer Qr',
      redirecTo: '/leer-qr'
    },
    {
      icon: 'logo-flickr',
      name: 'Actualizar-Perfil',
      redirecTo: '/registro-profesor'
    },
    
  ];

}

