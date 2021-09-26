import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { RoomsEffects } from "./store/effects/room-effects";

import { reducer } from "./store/reducers";
import { environment } from "../../../environments/environment";

import { RoomsRoutingModule } from "./rooms-routing.module";
import { RoomsComponent } from "./rooms.component";
import { RoomsHttpService } from "./rooms.http.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { RoomsInterceptor } from "./rooms.interceptor";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RoomsComponent],
  imports: [
    CommonModule,
    RoomsRoutingModule,FormsModule, ReactiveFormsModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature("rooms", reducer),
    EffectsModule.forFeature([RoomsEffects]),
  ],
  providers: [
    RoomsHttpService,
    { provide: HTTP_INTERCEPTORS, useClass: RoomsInterceptor, multi: true },
  ],
})
export class RoomsModule {}
