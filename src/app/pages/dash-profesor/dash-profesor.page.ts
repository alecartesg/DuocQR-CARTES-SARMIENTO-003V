import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dash-profesor',
  templateUrl: './dash-profesor.page.html',
  styleUrls: ['./dash-profesor.page.scss'],
})
export class DashProfesorPage implements OnInit {

  constructor(private menuController: MenuController,
            public alertController: AlertController) { }

  ngOnInit() {
  }


  mostrarMenu(){
    this.menuController.open('first');
  }

  // async salir(){
  //   const alert = await this.alertController.create({
  //     header: 'Salir',
  //     message: '¿Seguro quieres cerrar seccion?',
  //     buttons: [
  //       {
  //         text: 'No',
  //         handler: () => {

  //         }
  //       }, {
  //         text: 'Si',
  //         handler: () => {
  //           localStorage.removeItem('Ingresado');
  //           this.navCtrl.navigateRoot('login');
  //         }
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }

}
