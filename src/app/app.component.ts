import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Usuario, RegistroserviceService } from 'src/app/services/registroservice.service';

interface Componente1 {
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
  constructor() {
    this.componentes = [
      
      
    ];

    // Verifico si el usuario activo es profesor.
    // Si lo es, agrego item al menú.
    if (localStorage.getItem('ingresadoP') === 'true') {
      this.componentes.push({
        icon: 'person-outline',
        name: 'Inicio',
        redirecTo: '/dash-estudiante',
      },
      {
        icon: 'qr-code-outline',
        name: 'Generar QR',
        redirecTo: '/generar-qr',
      });
    }
    if (localStorage.getItem('ingresadoE') === 'true') {
      this.componentes.push(
      {
        icon: 'person-outline',
        name: 'Inicio',
        redirecTo: '/dash-estudiante',
      },
      {
        icon: 'qr-code-outline',
        name: 'Leer QR',
        redirecTo: '/leer-qr',
      },
      );
    }
  }


  componentes: Componente1[];
}
