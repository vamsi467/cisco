import {
  Action,
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { storeLogger } from 'ngrx-store-logger';
import * as fromRouter from '@ngrx/router-store';
import { InjectionToken } from '@angular/core';

export interface State {
  router: fromRouter.RouterReducerState<any>;
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<State, Action>>('Root reducer token', {
  factory: () => ({
    router: fromRouter.routerReducer
  })
});


export const metaReducers: MetaReducer<State>[] = environment.production ? [] : [logger];


export function logger(reducer: ActionReducer<State>): any {
  // default, no options
  return storeLogger()(reducer);
}
