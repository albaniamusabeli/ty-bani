import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Peluche } from '../interfaces/ty';

@Injectable({
  providedIn: 'root'
})
export class FirestoreOsitosService {

  constructor(private firestore: AngularFirestore) { }

  agregarServiceTy(peluche: Peluche): Promise<any>{
    return this.firestore.collection('tydb').add(peluche)
  }


}
