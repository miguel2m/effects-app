import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Routers
import { RouterModule } from '@angular/router';
//Componenets
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class SharedModule { }
