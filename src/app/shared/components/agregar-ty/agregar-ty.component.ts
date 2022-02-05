import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { StorageService } from 'src/app/services/storage.service';
import { decode } from "base64-arraybuffer";
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/pages/modal/modal.component';

@Component({
  selector: 'app-agregar-ty',
  templateUrl: './agregar-ty.component.html',
  styleUrls: ['./agregar-ty.component.scss']
})

export class AgregarTyComponent implements OnInit {

  imagen: any = '';
  constructor(private storage: StorageService,
    private modal: ModalController) { }

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

    const blob = new Blob([new Uint8Array(decode(image.base64String))], {
      type: `image/${image.format}`
    })

    //Funcion para subir la foto a Firebase
    //this.storage.subirImagen(this.nombre + '-' + Date.now(), image);
    this.storage.subirImagen(this.nombre + '-' + Date.now(), blob).then(data => {
      console.log(data);
      this.storage.fotoUrl = data

      //Al tomar la foto, se cargara el modal con el formulario reactivo
      this.verModal()
    })

  }

  //Funcion asincronica para el formulario
  async verModal() {
    /*Luego de tomar la foto y guardarla en Firebase, se activará el modal
    que contiene el formulario reactivo para los datos del osito*/
    const modal = await this.modal.create({
      component: ModalComponent
    });
    await modal.present();
  }



  clickModal(){
    this.verModal()
  }


}
