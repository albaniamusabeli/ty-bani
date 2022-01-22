import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

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
    console.log(this.formularioLogin.value);
    
  }
}
