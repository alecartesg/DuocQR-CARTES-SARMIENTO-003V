import { Component, OnInit } from '@angular/core';
import { MenuController,NavController,AlertController } from '@ionic/angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

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