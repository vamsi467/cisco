import { Injectable } from "@angular/core";
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { RoomsHttpService } from "./rooms.http.service";

@Injectable()
export class RoomsInterceptor implements HttpInterceptor {
  constructor(private _authService: RoomsHttpService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let newReq = req.clone();
    const accessToken = sessionStorage.getItem("accessToken");

    console.log("2", accessToken);
    if (accessToken) {
      newReq = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + accessToken),
      });
    }

    return next.handle(newReq).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          console.log(error);
        }

        return throwError(error);
      })
    );
  }
}
