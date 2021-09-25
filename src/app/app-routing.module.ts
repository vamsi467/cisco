import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: 'rooms',
    loadChildren: './features/rooms/rooms.module#RoomsModule'
  },
  {
    path: '',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), StoreRouterConnectingModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
