import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { SnackBarService } from '../service/snack-bar.service';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private _route: Router,
    private _auth: AuthService,
    private _snackBar: SnackBarService,
    private _router: Router
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Token ${this._auth.getAccessToken()}`,
      },
    });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.error && error.error.message) {
          if (
            error.error.message == 'Employee registered already' ||
            error.error.message == 'This password reset code has expired.'
          ) {
            this._router.navigate(['/error-page', error.error.message]);
          } else if (error.error.message == 'Request is not authenticated.') {
            this._router.navigateByUrl(`login`);
            this._snackBar.errorSnackBar(error.error.message);
          } else {
            this._snackBar.errorSnackBar(error.error.message);
          }
        }
        return throwError(error);
      })
    );
  }
}
