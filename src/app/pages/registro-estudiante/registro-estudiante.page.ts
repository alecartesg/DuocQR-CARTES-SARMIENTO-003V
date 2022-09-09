import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-estudiante',
  templateUrl: './registro-estudiante.page.html',
  styleUrls: ['./registro-estudiante.page.scss'],
})
export class RegistroEstudiantePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  usuario= {
    nombre: '',
    email: '',
    password: '',
    lastname:'',
    sede:'',
    type: 'estudiante',
    carrera:'',
  }
  onSubmit() {
    console.log('Submit');
    console.log(this.usuario);
  }



}
