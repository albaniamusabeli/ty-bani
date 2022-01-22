import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario : string = '';


  constructor(private fb: FormBuilder,
              private servicioLogin: LoginService) { }

  ngOnInit(): void {
  }

  //EXPRESION REGULAR EMAIL
  private patron = /\S+@\S+\.\S+/;

  formularioLogin = this.fb.group({
    correo: ['', [Validators.required, Validators.pattern(this.patron)]],
    contrasena: ['', Validators.required]
  })


  //boton ingresar del login con GOOGLE
  botonIngresar(){
    this.servicioLogin.loginGoogle().then(data =>{
      //console.log(data.additionalUserInfo.profile.name);
      //console.log(data.additionalUserInfo.profile.picture);
      
    })
    
  }

  //obtener usuario logueado con GOOGLE
  obtenerUsuario(){
    this.servicioLogin.obtenerUsuarioGoogle().subscribe(data=>{
      this.usuario = data.email
      console.log(data.displayName);
      
    })
  }


}
