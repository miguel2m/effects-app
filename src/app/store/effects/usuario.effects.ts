import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as usuarioActions from '../actions';


import { UsuarioService } from '../../services/usuario.service';

import { mergeMap, map, catchError } from 'rxjs/operators';


@Injectable()
export class UsuarioEffects {
    @Effect() cargarUsuario$: Observable<Action> = 
        this.actions$.pipe(
            ofType(usuarioActions.cargarUsuario),
            mergeMap(
                (action)=> this.usuarioServices.getUser(action.id)
                .pipe(
                    map(user => usuarioActions.cargarUsuarioSeccess({usuario: user})),
                    catchError( err => of( usuarioActions.cargarUsuarioError({payload :err})))
                )
            )
        );

    constructor(
        private actions$: Actions,
        private usuarioServices: UsuarioService
    ) {}
}