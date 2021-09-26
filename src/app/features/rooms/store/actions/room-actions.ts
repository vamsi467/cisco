import { Action } from "@ngrx/store";

export enum RoomsActionTypes {
  ListRooms = "[Rooms] List Rooms",
  ListRoomsSuccess = "[Rooms] List Rooms Success",
  ListRoomsFailure = "[Rooms] List Rooms Failure",
  CreateRoom = "[Rooms] Create Rooms",
  CreateRoomSuccess = "[Rooms] Create Rooms Success",
  CreateRoomFailure = "[Rooms] Create Rooms Failure",
  DeleteRoom = "[Rooms] Delete Rooms",
  DeleteRoomSuccess = "[Rooms] Delete Rooms Success",
  DeleteRoomFailure = "[Rooms] Delete Rooms Failure",
}

export class ListRooms implements Action {
  readonly type = RoomsActionTypes.ListRooms;
}

export class ListRoomsSuccess implements Action {
  readonly type = RoomsActionTypes.ListRoomsSuccess;
  constructor(public payload: { data: any }) {}
}

export class ListRoomsFailure implements Action {
  readonly type = RoomsActionTypes.ListRoomsFailure;
  constructor(public payload: { error: any }) {}
}

export class CreateRoom implements Action {
  readonly type = RoomsActionTypes.CreateRoom;
  constructor(public payload: { title: string }) {}
}

export class CreateRoomSuccess implements Action {
  readonly type = RoomsActionTypes.CreateRoomSuccess;
  constructor(public payload: { data: any }) {}
}

export class CreateRoomFailure implements Action {
  readonly type = RoomsActionTypes.CreateRoomFailure;
  constructor(public payload: { error: any }) {}
}

export class DeleteRoom implements Action {
  readonly type = RoomsActionTypes.DeleteRoom;
  constructor(public payload: { id:string}) {}
}

export class DeleteRoomSuccess implements Action {
  readonly type = RoomsActionTypes.DeleteRoomSuccess;
  constructor(public payload: { data: any }) {}
}

export class DeleteRoomFailure implements Action {
  readonly type = RoomsActionTypes.DeleteRoomFailure;
  constructor(public payload: { error: any }) {}
}
export type RoomsActions =
   ListRooms
  | ListRoomsSuccess
  | ListRoomsFailure
  | CreateRoom
  | CreateRoomSuccess
  | CreateRoomFailure
  | DeleteRoom
  | DeleteRoomSuccess
  | DeleteRoomFailure;
