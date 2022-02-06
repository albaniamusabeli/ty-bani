import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
//login con google
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userUID : string = ''

  googleProfile = {
    nombre: '',
    imagen: ''
  }


  constructor(private firestore: AngularFirestore,
              private auth: AngularFireAuth) { }



  // crear usuario para iniciar sesion en firebase
  registrarUsuario(data: any): Promise<any>{
    return this.auth.createUserWithEmailAndPassword(data.correo, data.contrasena);
  }

  // Metodo para iniciar sesion con email en firebase
  loginConEmail(data: any): Promise<any>{
    return this.auth.signInWithEmailAndPassword(data.correo, data.contrasena);
  }

  // Guardar datos del usuario que inicia sesion
  guardarUsuario(data: any){
    return this.firestore.collection('usuarios').doc(data.uid).set(data);
  }





  // Obtener usuario
  obtenerUsuario(data: any){
    return  this.firestore.collection('usuarios').doc(data.uid).valueChanges();
  }

  // Login con Google
  loginGoogle(): Promise<any>{
    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  obtenerUsuarioGoogle(): Observable<any>{
    return this.auth.authState;
  }
}
