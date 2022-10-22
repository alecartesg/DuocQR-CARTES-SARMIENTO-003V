import { Component, OnInit } from '@angular/core';
import { AlertController, mdTransitionAnimation } from '@ionic/angular';
import { RegistroserviceService, Usuario} from '../../services/registroservice.service';
import { ToastController } from '@ionic/angular';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro : FormGroup; 
  newUsuario: Usuario = <Usuario>{};

  constructor(private alertController: AlertController, 
              private registroService: RegistroserviceService, 
              private toastController: ToastController, 
              private fb: FormBuilder) {
                this.formularioRegistro = fb.group({ 
                  'nombre' : new FormControl("", Validators.required),
                  'correo' : new FormControl("", Validators.required), 
                  'password': new FormControl("", Validators.required),
                  'confirmaPass': new FormControl("", Validators.required),
                  'creaRol': new FormControl("", Validators.required)
                })
               }

  ngOnInit() {
  }

  async CrearUsuario(){
    var form = this.formularioRegistro.value; 
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({ 
        header: 'Error..',
        message: 'Los datos ingresados son incorrectos',
        buttons: ['Aceptar']
      })
      await alert.present();
    }
    else{
      this.newUsuario.nomUsuario = form.nombre;
      this.newUsuario.correoUsuario = form.correo;
      this.newUsuario.passUsuario = form.password;
      this.newUsuario.repassUsuario = form.confirmaPass;
      this.newUsuario.rol = form.creaRol;
      this.registroService.addUsuario(this.newUsuario).then(dato=>{
        this.newUsuario = <Usuario>{};
        this.showToast('Usuario Creado!');
      })
      this.formularioRegistro.reset();
    }//finelse
  }//finmetodo

  async showToast(msg){
    const toast = await this.toastController.create({ 
      message : msg,
      duration: 2000
    })
    await toast.present();
  }






}
