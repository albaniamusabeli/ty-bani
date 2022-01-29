import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AgregarTyComponent } from './agregar-ty/agregar-ty.component';
import { ListarTyComponent } from './listar-ty/listar-ty.component';



@NgModule({
  declarations: [HeaderComponent, AgregarTyComponent, ListarTyComponent],
  imports: [
    CommonModule,
    IonicModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    HeaderComponent,
    AgregarTyComponent,
    ListarTyComponent
  ]
})
export class ComponentsModule { }
