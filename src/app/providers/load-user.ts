import { Store } from '@ngrx/store';
import { EMPTY as empty } from 'rxjs';
import { catchError, find, mergeMap } from 'rxjs/operators';

import { Injector } from '@angular/core';
import { AngularTokenService } from 'angular-token';
import { AppState, selectAuthState } from '../store/app.states';
import { SetUser } from '../store/actions/auth.actions';

export function loadUser(
    injector: Injector,
    store: Store<AppState>
): () => Promise<boolean> {
    return (): Promise<any> => {
        const tokenService = injector.get(AngularTokenService);
        return tokenService
            .validateToken()
            .pipe(
                mergeMap(response => {
                    store.dispatch(new SetUser({user: response.data}));
                    return store.select(selectAuthState).pipe(find(Boolean));
                }),
                catchError(() => {
                    return empty;
                }),
            )
            .toPromise()
            .catch(() => true);
    }
}
