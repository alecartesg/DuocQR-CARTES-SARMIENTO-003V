import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GENERARQRPage implements OnInit {

  constructor(private menuController:MenuController) { }

  ngOnInit() {
  }

  menu(){
    this.menuController.open('first');
  }
}