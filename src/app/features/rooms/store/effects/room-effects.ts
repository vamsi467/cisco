import { Injectable } from "@angular/core";
import { Actions, Effect, mergeEffects, ofType } from "@ngrx/effects";
import { RoomsHttpService } from "../../rooms.http.service";
import { of } from "rxjs";
import { catchError, map, mergeMap, switchMap, tap } from "rxjs/operators";

import { RoomsActionTypes, ListRooms } from "../actions/room-actions";

@Injectable()
export class RoomsEffects {
  constructor(
    private actions$: Actions,
    private roomservice: RoomsHttpService
  ) {}
  @Effect()
  createRoom$ = this.actions$.pipe(
    ofType(RoomsActionTypes.CreateRoom),
    mergeMap(({payload}) =>
      this.roomservice.createRoom(payload).pipe(
        map((room: any) => ({
          type: RoomsActionTypes.CreateRoomSuccess,
          payload: room,
        })),
        map(()=>({
          type: RoomsActionTypes.ListRooms,
        })),
        catchError((error) =>
          of({ type: RoomsActionTypes.CreateRoomFailure, payload: error })
        )
      )
    )
  );
  @Effect()
  getAllRooms$ = this.actions$.pipe(
    ofType(RoomsActionTypes.ListRooms),
    mergeMap(() =>
      this.roomservice.getAllRooms().pipe(
        map((rooms: any) => {
         return {
            type: RoomsActionTypes.ListRoomsSuccess,
            payload: rooms.items,
          }
        }),
        catchError((error) =>
          of({ type: RoomsActionTypes.ListRoomsFailure, payload: error })
        )
      )
    )
  );

  @Effect()
  deleteRoom$ = this.actions$.pipe(
    ofType(RoomsActionTypes.DeleteRoom),
    mergeMap(({payload}) =>
      this.roomservice.deleteRoom(payload).pipe(
        map((room) => ({
          type: RoomsActionTypes.DeleteRoomSuccess,
          payload: room,
        })),
        map(()=>({
          type: RoomsActionTypes.ListRooms,
        })),
        catchError((error) =>
          of({ type: RoomsActionTypes.DeleteRoomFailure, payload: error })
        )
      )
    )
  );
}
