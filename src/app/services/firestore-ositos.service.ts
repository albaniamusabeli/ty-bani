import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { query } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Peluche } from '../interfaces/ty';

@Injectable({
  providedIn: 'root'
})
export class FirestoreOsitosService {

  constructor(private firestore: AngularFirestore) { }

  agregarServiceTy(peluche: Peluche): Promise<any>{
    return this.firestore.collection('tydb').add(peluche)
  }

  //Obtener la lista de ositos ordenados por fecha de Creacion
  obtenerListaTyFire(): Observable<any>{
    return this.firestore.collection('tydb', query => query.orderBy('fechaCreacion', 'desc')).snapshotChanges()
  }

}
