import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../services/registroservice.service';
import { FormGroup, FormControl, Validators, FormBuilder }
  from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(private alertController: AlertController,
    private navController: NavController,
    private registroService: RegistroserviceService,
    private fb: FormBuilder) {
    this.formularioLogin = fb.group({
      'correo': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }

  async Ingresar() {
    var f = this.formularioLogin.value;
    var a = 0;
    this.registroService.getUsuarios().then(usuarios => {
      for (let usuario of usuarios) {
        if (usuario.correoUsuario === f.correo && usuario.passUsuario === f.password) {
          a = 1;
          console.log('ingresado');
          if (usuario.rol === 'Estudiante') {
            localStorage.setItem('ingresadoE', 'true');
            this.navController.navigateRoot('dash-estudiante');
          }
          else if (usuario.rol === 'Profesor') {
            localStorage.setItem('ingresadoP', 'true');
            this.navController.navigateRoot('dash-profesor');
          }
        }
      }
      if (a == 0) {
        this.alertMsg();
      }
    })
  }



  async alertMsg() {
    const alert = await this.alertController.create({
      header: 'Error..',
      message: 'Los datos ingresados son incorrectos',
      buttons: ['Aceptar']
    })
    await alert.present();
    return;
  }



}
