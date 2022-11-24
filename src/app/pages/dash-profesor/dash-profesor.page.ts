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


  async mostrarMenu(){
    this.menuController.open('first');
  }



}
