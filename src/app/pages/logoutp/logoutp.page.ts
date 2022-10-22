import { Component, OnInit } from '@angular/core';
import { MenuController,NavController,AlertController } from '@ionic/angular';

@Component({
  selector: 'app-logoutp',
  templateUrl: './logoutp.page.html',
  styleUrls: ['./logoutp.page.scss'],
})
export class LogoutpPage implements OnInit {

  constructor(private menuController: MenuController, private alertController: AlertController, private navController: NavController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
 logout () {
    localStorage.removeItem('ingresadoP');
    localStorage.removeItem('ingresadoE');
    this.navController.navigateRoot('login');
 }

}