import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  fotoUrl: string | null = '';

  constructor(private storage : AngularFireStorage) { }
  storageRef = firebase.app().storage().ref()

  //const x = this.storage.upload()

  async subirImagen(nombre: string, img64: any) {
    try {
      //let respuesta = await this.storageRef.child('ty/' + nombre).putString(img64, 'data_url');
      //console.log(respuesta);
      let subir = await this.storage.upload('ty/' + nombre, img64)
      return await subir.ref.getDownloadURL()
      
    } catch (error) {
      console.log(error);
      return null;

    }
  }
}
