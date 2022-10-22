import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-leer-qr',
  templateUrl: './leer-qr.page.html',
  styleUrls: ['./leer-qr.page.scss'],
})
export class LeerQRPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {

  }
  mostrarMenu(){
    this.menuController.open('first');
  }

}
