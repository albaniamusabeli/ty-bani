import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreUsuariosService {

  constructor(private firestore: AngularFirestore) { }

  //Obtener a TODOS los usuarios
  obtenerUsuarios(): Observable<any>{
    return this.firestore.collection('usuarios').snapshotChanges()
  }
  
}
