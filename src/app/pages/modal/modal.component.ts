import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Peluche } from 'src/app/interfaces/ty';
import { FirestoreOsitosService } from 'src/app/services/firestore-ositos.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  ositoTy: Peluche = {
    nombre: '',
    color: '',
    fotoUrl: '',
    fechaCreacion: new Date(0)
  }

  constructor(private fb: FormBuilder,
              private firestoreService: FirestoreOsitosService,
              private storageService: StorageService) { }

  ngOnInit(): void {
  }

  //Formulario Reactivo
  formAgregarTy = this.fb.group({
    nombreTy:['', Validators.required],
    color:['', Validators.required]
  })


  //Funcion del boton del formulario agregar Ty
  agregarTy(){

    this.ositoTy = {
      nombre: this.formAgregarTy.value.nombreTy,
      color: this.formAgregarTy.value.color,
      fotoUrl: this.storageService.fotoUrl,
      fechaCreacion: new Date
    }

    this.firestoreService.agregarServiceTy(this.ositoTy).then(()=>{
      console.log("Osito Guardado");
      
    })

  }

}
