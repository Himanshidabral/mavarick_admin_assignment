import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router:Router,
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem("token");

    if (token) {
      request = request.clone({
        setHeaders: { Authorization: "Bearer " + token },
      });
      // return next.handle(httpRequest);
    }
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status == 401) {
          // localStorage.clear();
          localStorage.removeItem("token");
          // return throwError(error)
          this.router.navigate(["/login"]);
        }
        return throwError(error);
      })
    );
  }
}
