import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuController,NavController,AlertController, IonicModule } from '@ionic/angular';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule
  ],
  declarations: [GenerarQrPage]
})

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQrPage implements OnInit {
  qrCodeString= "code for class";
  usuario={
    asign:'',};

  fecha={
    asign:'',};


  constructor(private menuController: MenuController,
         public alertController: AlertController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }

  generaScan(){
    this.qrCodeString= this.usuario.asign;
    this.qrCodeString= this.fecha.asign;
  }
}

