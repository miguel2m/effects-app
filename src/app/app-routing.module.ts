import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ListaComponent } from './usuario/lista/lista.component';
import { UsuarioComponent } from './usuario/usuario/usuario.component';


const routes: Routes =[
  {path: 'home', component: ListaComponent},
  {path: 'usuario/:id', component: UsuarioComponent},
  {path: '**', redirectTo:'home'}
]



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
