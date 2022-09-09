import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dash-estudiante',
  templateUrl: './dash-estudiante.page.html',
  styleUrls: ['./dash-estudiante.page.scss'],
})
export class DashEstudiantePage implements OnInit {

  constructor(private menuController:MenuController) { }

  ngOnInit() {
  }

  menu(){
    this.menuController.open('first');
  }
}
