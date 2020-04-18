import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { environment } from '../environments/environment'; // Angular CLI environment

//Rutas
import { AppRoutingModule } from './app-routing.module';

//NGRX
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducers';

//Effects
import { EffectsModule } from '@ngrx/effects';
import { EffectsArray } from './store/effects';

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
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot(EffectsArray),
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    UsuariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
