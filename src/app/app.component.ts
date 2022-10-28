import { Component, NgModule } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Usuario, RegistroserviceService } from 'src/app/services/registroservice.service';
import { HttpClientModule } from '@angular/common/http'

interface Componente1 {
  icon: string;
  name: string;
  redirecTo: string;
}

@NgModule({
  imports: [HttpClientModule]
})


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
      },
      {
        icon: 'dice-outline',
        name: 'Api',
        redirecTo: '/api',
      },
      {
        icon: 'log-out-outline',
        name: 'Salir',
        redirecTo: 'logoutp',
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
      {
        icon: 'log-out-outline',
        name: 'Salir',
        redirecTo: 'logout',
      }
      );
    }
  }


  componentes: Componente1[];
}
