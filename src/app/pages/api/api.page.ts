import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  characters = []

  constructor( private menuController: MenuController,
    public alertController: AlertController,
    private http : HttpClient ) { }

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
