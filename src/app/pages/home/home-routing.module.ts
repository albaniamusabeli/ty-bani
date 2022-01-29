import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarTyComponent } from 'src/app/shared/components/agregar-ty/agregar-ty.component';
import { ListarTyComponent } from 'src/app/shared/components/listar-ty/listar-ty.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children:[
      {
        path: 'agregar',
        component: AgregarTyComponent
      },
      {
        path: 'listar',
        component: ListarTyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
