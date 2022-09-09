import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-leer-qr',
  templateUrl: './leer-qr.page.html',
  styleUrls: ['./leer-qr.page.scss'],
})
export class LeerQRPage implements OnInit {

  handlerMessage='';
  roleMessage='';

  constructor(private alertController: AlertController,private menuController:MenuController) { }

  ngOnInit() {
  }

    //método que muestra una alerta con dos opciones  de botón
    async Confirma() {
      const alert = await this.alertController.create({
        header: 'Presione Si para confirmar',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              this.handlerMessage = 'Vuelva Pronto';
            },
          },
          {
            text: 'Si',
            role: 'confirm',
            handler: () => {
              this.handlerMessage = 'Se a escaneado el QR';
            },
          },
        ],
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
      this.roleMessage = `Dismissed with role: ${role}`;
    }

    menu(){
      this.menuController.open('first');
    }

}
