import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/usuario';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  //usuario para registro
  usuarioRegistro: Usuario = {
    nombre: '',
    correo: '',
    contrasena: '',
    fechaRegistro: new Date(0)
  }

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private toastCtrl: ToastController,
              private router: Router) { }

  ngOnInit(): void {
  }

  formularioSignUp = this.fb.group({
    nombre: ['', Validators.required],
    correo: ['', Validators.required],
    contrasena: ['', [Validators.required, Validators.minLength(6)]]
  })

  //FUNCION DEL BOTON SIGN UP PARA EL NGSUBMIT
  registro(){
    //console.log(this.formularioSignUp.value);
    // Guarda los datos del formulario al objeto usuario que se va a guardar en Firebase
    this.usuarioRegistro.nombre = this.formularioSignUp.value.nombre,
    this.usuarioRegistro.correo = this.formularioSignUp.value.correo,
    this.usuarioRegistro.contrasena = this.formularioSignUp.value.contrasena,
    this.usuarioRegistro.fechaRegistro = new Date()

    // El usuario es registrado en firebase y nos retorna el uid desde data.user
    this.loginService.registrarUsuario(this.usuarioRegistro).then( (data)=>{
      //console.log('USUARIO REGISTRADO');
      this.mensajeToast(this.usuarioRegistro.nombre)
      // Cuando el registro es exitoso, se guarda el uid en el objeto usuarioRegistro
      this.usuarioRegistro.uid = data.user.uid
      
      // Con los datos del usuario listos, se guardan en firestore!!
      this.loginService.guardarUsuario(this.usuarioRegistro).then(()=>{
        console.log('USUARIO REGISTRADO EN FIRESTORE');

        //Redireccion a home despues de crear la cuenta (con router)
        this.router.navigate(['/login'])
      })
      
    }).catch(error=>{
      this.mensajeErrorToast(error)
    })
  }

  // TOAST para mensaje
  async mensajeToast(usuario: any) {
    const toast = await this.toastCtrl.create({
      message: `Usuario ${usuario} Registrado`,
      duration: 2000
    });
    toast.present();
  }


  // TOAST para mensaje ERROR
  async mensajeErrorToast(error: any) {
    const toast = await this.toastCtrl.create({
      message: error.message,
      duration: 4000
    });
    toast.present();
  }
}
