import { AsyncAction } from "rxjs/internal/scheduler/AsyncAction";
import { RoomsActions, RoomsActionTypes } from "../actions/room-actions";
export interface RoomsState{
  rooms:any[]
}

export const initialState:RoomsState = {
  rooms: [],
};
export function reducer(state = initialState, action: RoomsActions) {
  console.log('redu',action)
  switch (action.type) {
    case RoomsActionTypes.ListRoomsSuccess: {
      return {
        ...state,
        rooms: action.payload
      };
    }
    case RoomsActionTypes.ListRoomsFailure: {
      return {
        ...state,
        rooms: []
      };
    }

    default: {
      return state;
    }
  }
}
