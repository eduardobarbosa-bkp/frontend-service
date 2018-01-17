import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';

@Injectable()
export class JwtHttpInterceptor implements HttpInterceptor {

  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + currentUser.token)
      });

      return next.handle(cloned);
    }
    else {
      return next.handle(req);
    }

  }
}
