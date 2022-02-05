import { Component, OnInit } from '@angular/core';
import { Peluche } from 'src/app/interfaces/ty';
import { FirestoreOsitosService } from 'src/app/services/firestore-ositos.service';

@Component({
  selector: 'app-listar-ty',
  templateUrl: './listar-ty.component.html',
  styleUrls: ['./listar-ty.component.scss']
})
export class ListarTyComponent implements OnInit {

  constructor(private firestoreService: FirestoreOsitosService) { }

  listaTy: Peluche[] = []

  ngOnInit(): void {
    this.obtenerListaTy()
  }


  obtenerListaTy(){
    this.firestoreService.obtenerListaTyFire().subscribe(data=>{
      this.listaTy = [];

      data.forEach((i:any) => {
        this.listaTy.push({
          ...i.payload.doc.data()
        })
      })

      console.log(this.listaTy);
      
    })
  }

}
