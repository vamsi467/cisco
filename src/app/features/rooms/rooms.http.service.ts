import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "../../../environments/environment";

@Injectable()
export class RoomsHttpService {
  private actionUrl: string = environment.baseUrl + "/rooms";
  
  constructor(private http: HttpClient) {}
  
  

  createRoom(payload) {
    return this.http.post(this.actionUrl, payload);
  }

  getAllRooms() {
    return this.http.get(this.actionUrl);
  }

  deleteRoom(payload) {
    return this.http.delete(this.actionUrl+ '/'+payload.id);
  }
}
