import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { StorageService } from 'src/app/services/storage.service';
import {decode} from "base64-arraybuffer";

@Component({
  selector: 'app-agregar-ty',
  templateUrl: './agregar-ty.component.html',
  styleUrls: ['./agregar-ty.component.scss']
})

export class AgregarTyComponent implements OnInit {

  imagen: any = '';
  constructor(private storage: StorageService) { }

  ngOnInit(): void {
  }

  nombre = 'foto';


  camara = async () => {
    const image: any = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64
    });

    //console.log(image);
     
    const blob = new Blob([new Uint8Array(decode(image.base64String))],{
      type: `image/${image.format}`
    })

    //this.storage.subirImagen(this.nombre + '-' + Date.now(), image);
    this.storage.subirImagen(this.nombre + '-' + Date.now() , blob).then(data =>{
      console.log(data);
      
    })

  };



}
