import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { MenuController,NavController,AlertController } from '@ionic/angular';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  characters = []

  constructor( private http : HttpClient , private menuController: MenuController) { }

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/character')
      .subscribe(res => {
        console.log(res);
        this.characters = res.results;
      })
  }
  mostrarMenu(){
    this.menuController.open('first');
  }

}
