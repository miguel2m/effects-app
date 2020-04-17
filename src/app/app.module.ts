import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
//Rutas
import { AppRoutingModule } from './app-routing.module';

//Modulos personalizados
import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuario/usuarios.module';

//Component
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    UsuariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
