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
  constructor() {}

    componentes: Componente1[]=[
      {
        icon: 'person-outline',
        name: 'Inicio (Profesor)',
        redirecTo: '/dash-profesor',
      },
      {
        icon: 'qr-code-outline',
        name: 'Generar QR(Profesor)',
        redirecTo: '/generar-qr',
      },
      {
        icon: 'dice-outline',
        name: 'Api(Ambos)',
        redirecTo: '/api',
      },
      {
        icon: 'person-outline',
        name: 'Inicio-(Estudiante)',
        redirecTo: '/dash-estudiante',
      },
      {
        icon: 'qr-code-outline',
        name: 'Leer QR (Estudiante)',
        redirecTo: '/leer-qr',
      }, 
      {
        icon: 'log-out-outline',
        name: 'Cerrar sesión(ambos)',
        redirecTo: 'logoutp',
      },
           
    ];
  }