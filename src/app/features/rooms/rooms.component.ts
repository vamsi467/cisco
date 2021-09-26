import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { RoomsHttpService } from "./rooms.http.service";
import { ListRooms, CreateRoom, DeleteRoom } from "./store/actions/room-actions";
import { RoomsState } from "./store/reducers";
@Component({
  selector: "app-rooms",
  templateUrl: "./rooms.component.html",
  styleUrls: ["./rooms.component.css"],
})
export class RoomsComponent implements OnInit {
  roomName:FormControl=new FormControl('', [Validators.required]);
  
  rooms$: Observable<any> = this.store.select((state:any) => {console.log(state.rooms);
   return state.rooms.rooms});
  constructor(private route: ActivatedRoute, private store: Store<{}>) {}

  ngOnInit() {
    this.route.fragment
      .pipe(
        map((fragment) => new URLSearchParams(fragment)),
        map((params) => ({
          access_token: params.get("access_token"),
        }))
      )
      .subscribe((res) => {
        this.getRooms(res.access_token)
      });
  }
  async getRooms(access_token) {
    sessionStorage.setItem("accessToken", access_token);
    this.store.dispatch(new ListRooms());
  }
  addRoom(){
    this.store.dispatch(new CreateRoom({title:this.roomName.value}));
  }
  deleteRoom(id){
    this.store.dispatch(new DeleteRoom({id}));
  }
}
