import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions/usuarios.actions';


import { UsuarioService } from '../../services/usuario.service';

import { mergeMap, map, catchError } from 'rxjs/operators';


@Injectable()
export class UsuariosEffects {
    @Effect() cargarUsuario$: Observable<Action> = 
        this.actions$.pipe(
            ofType(usuariosActions.cargarUsuarios),
            mergeMap(
                ()=> this.usuariosServices.getUsers()
                .pipe(
                    map(users => usuariosActions.cargarUsuariosSeccess({usuarios: users})),
                    catchError( err => of( usuariosActions.cargarUsuariosError({payload :err})))
                )
            )
        );

    constructor(
        private actions$: Actions,
        private usuariosServices: UsuarioService
    ) {}
}