import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  handlerMessage='';
  roleMessage='';

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

    //método que muestra una alerta con dos opciones  de botón
    async Confirma() {
      const alert = await this.alertController.create({
        header: '¿Quiere recuperar su contraseña?',
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
              this.handlerMessage = 'Se a enviado el link de recuperacion a su correo';
            },
          },
        ],
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
      this.roleMessage = `Dismissed with role: ${role}`;
    }
  

}
