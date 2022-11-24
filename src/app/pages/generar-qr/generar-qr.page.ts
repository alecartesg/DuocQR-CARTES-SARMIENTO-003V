import { Component, OnInit } from '@angular/core';
import { MenuController,NavController,AlertController } from '@ionic/angular';
import { QRCodeModule } from 'angularx-qrcode';
@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQrPage implements OnInit {
  qrCodeString= "This is a secret code"

  constructor(private menuController: MenuController, ) { 
  }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
}
