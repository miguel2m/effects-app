import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { cargarUsuario } from 'src/app/store/actions';

import { Usuario } from '../../models/usuario.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit, OnDestroy {
  usuario: Usuario = null;
  loading: boolean = false;
  error:any;
  
  storeSubs: Subscription;
  routerSubs: Subscription;

  constructor( private router: ActivatedRoute,
                private store: Store<AppState>) { }

  ngOnInit(): void {
    this.storeSubs=this.store.select('usuario').subscribe( ({user, loading,error})  =>{
        
        this.usuario  = user;
        this.loading  = loading;
        if(error)
          this.error    = error;
        else
          this.error=null;
    });

    this.routerSubs=this.router.params.subscribe( ({id}) =>
      this.store.dispatch( cargarUsuario({id : id}))
    );
  }

  ngOnDestroy(): void{
    this.routerSubs?.unsubscribe();
    this.storeSubs?.unsubscribe();
  }

}
