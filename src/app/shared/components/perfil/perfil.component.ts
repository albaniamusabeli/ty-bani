import { Component, OnInit } from '@angular/core';
import { FirestoreUsuariosService } from 'src/app/services/firestore-usuarios.service';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  uid: string = '';

  usuario!: any;

  listaUsuarios: Usuario[] = []



  constructor(private servicioLogin: LoginService,
    private firestoreUsuarios: FirestoreUsuariosService) {
    this.uid = this.servicioLogin.userUID;

    // Cargar el nombre y la imagen desde el servicio Login
    this.verDatosPerfil()

  }

  ngOnInit(): void {
  }


  verDatosPerfil() {

    this.listaUsuarios = [];

    //Obtener array de los usuarios
    this.firestoreUsuarios.obtenerUsuarios().subscribe(data => {

      console.log(data.payload);

      data.forEach((element: any) => {
        console.log(element.payload.doc.data());
        this.usuario = element.payload.doc.data()

/*         this.listaUsuarios.push({
          ...element.payload.doc.data()
        }) */
      });
      
      //this.usuario = this.listaUsuarios.find(usuario => usuario.uid = this.uid)

    })

  }


}
