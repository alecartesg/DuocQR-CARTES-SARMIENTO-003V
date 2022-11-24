import { Component, OnInit } from '@angular/core';
import { AlertController, mdTransitionAnimation, NavController } from '@ionic/angular';
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
  usuarios: Usuario[] =[]; 

  constructor(private alertController: AlertController, 
              private navController: NavController,
              private registroService: RegistroserviceService, 
              private toastController: ToastController, 
              private fb: FormBuilder) 
              {
                this.formularioRegistro = fb.group({ 
                  'nombre' : new FormControl('', [Validators.required, Validators.minLength(2)]),
                  'correo' : new FormControl('', [Validators.required, Validators.email]), 
                  'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
                  'confirmaPass': new FormControl('', [Validators.required, Validators.minLength(6)]),
                  'creaRol': new FormControl('', [Validators.required])
                })
               }

  ngOnInit() {
  }

  async CrearUsuario(){
    var form = this.formularioRegistro.value; 
    var existe = 0;
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({ 
        header: 'Error..',
        message: 'Los datos ingresados son incorrectos',
        buttons: ['Aceptar']
      })
      await alert.present();
    }
    else if(form.password==form.confirmaPass){
      this.newUsuario.nomUsuario = form.nombre;
      this.newUsuario.correoUsuario = form.correo;
      this.newUsuario.passUsuario = form.password;
      this.newUsuario.repassUsuario = form.confirmaPass;
      this.newUsuario.rol = form.creaRol;

      this.registroService.getUsuarios().then(datos=>{ 
        this.usuarios = datos; 
    
        if (!datos || datos.length==0){
          this.registroService.addUsuario(this.newUsuario).then(dato=>{ 
            this.newUsuario=<Usuario>{};
            this.showToast('Usuario Creado satisfactoriamente');
          });
          this.formularioRegistro.reset();
          this.navController.navigateRoot('login');
        }else{
        
        for (let obj of this.usuarios){
          if (this.newUsuario.correoUsuario == obj.correoUsuario){
            existe = 1;
          }
        }//Fin del for
      
          if (existe == 1){
            this.alertCorreoDuplicado();
            this.formularioRegistro.reset();
          }
          else{
            this.registroService.addUsuario(this.newUsuario).then(dato=>{ 
              this.newUsuario=<Usuario>{};
              this.showToast('Usuario Creado satisfactoriamente');
            });
            this.formularioRegistro.reset();
            this.navController.navigateRoot('login');
          }
        }
        })  
      
      }//finelse
    else{
        this.showToast('Contraseñas no coinciden!');
      }
      }//findelmetodo
    
  //finmetodo




async showToast(msg){
  const toast = await this.toastController.create({ 
    message : msg,
    duration: 2000
  })
  await toast.present();
}
async alertError(){
  const alert = await this.alertController.create({ 
    header: '¡Error!',
    message: 'Debe completar todos los datos',
    buttons: ['Aceptar']
  })
  await alert.present();
}

async alertCorreoDuplicado(){
  const alert = await this.alertController.create({ 
    header: '¡Error!',
    message: 'El correo ingresado ya existe',
    buttons: ['Aceptar']
  })
  await alert.present();
}


}
