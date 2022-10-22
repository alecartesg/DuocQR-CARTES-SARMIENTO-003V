import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dash-profesor',
  templateUrl: './dash-profesor.page.html',
  styleUrls: ['./dash-profesor.page.scss'],
})
export class DashProfesorPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }


  mostrarMenu(){
    this.menuController.open('first');
  }
}
