import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  usuario={
    nombre:'',
    lastname:'',
    email:'',
    password:'',
    sede:'',
    type: 'docente',
    carrera:'',
  }


  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }


}
