import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario = {
    correo: '',
    contrasena: ''
  }



  constructor(private fb: FormBuilder,
              private servicioLogin: LoginService,
              private router: Router) { }

  ngOnInit(): void {
  }

  //EXPRESION REGULAR EMAIL
  private patron = /\S+@\S+\.\S+/;

  formularioLogin = this.fb.group({
    correo: ['', [Validators.required, Validators.pattern(this.patron)]],
    contrasena: ['', Validators.required]
  })


  //boton ingresar del login 
  botonIngresar(){
    this.usuario.correo = this.formularioLogin.value.correo
    this.usuario.contrasena = this.formularioLogin.value.contrasena

    this.servicioLogin.loginConEmail(this.usuario).then( data =>{
      
      this.servicioLogin.userUID = data.user.uid;
      
      this.router.navigate(['/home'])
      //console.log(data.user.uid);
      
    } )
  }

  //obtener usuario logueado con GOOGLE
  /* obtenerUsuario(){
    this.servicioLogin.obtenerUsuarioGoogle().subscribe(data=>{
      this.usuario = data.email
      console.log(data.displayName);
      
    })
  } */


  //login con GOOGLE
 /*  botonGoogle(){
    this.servicioLogin.loginGoogle().then(data =>{
      //console.log(data.additionalUserInfo.profile.name);
      //console.log(data.additionalUserInfo.profile.picture);
      
      //Guardar los datos de nombre e imagen de perfil en el servicio Login
      this.servicioLogin.googleProfile.nombre = data.additionalUserInfo.profile.name;
      this.servicioLogin.googleProfile.imagen = data.additionalUserInfo.profile.picture;

      //redireccion a home desde login
      this.router.navigate(['/home'])
    })
    
  } */

}
