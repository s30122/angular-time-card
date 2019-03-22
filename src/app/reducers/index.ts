import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Employee } from '../employee';
import { Action } from 'rxjs/internal/scheduler/Action';

export const initial_login_emp: State = {
  login_emp: {
    id: 0,
    name: "",
    code: "",
    password: "",
    color: undefined
  }
}
export interface State {
  login_emp: Employee
}
export function reducer(emp = initial_login_emp, action: Action<State>): State {
  return emp;
}

// export const reducers: ActionReducerMap<State> = {

// };


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
