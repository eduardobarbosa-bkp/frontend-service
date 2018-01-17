import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {JwtHelper} from './jwt-helper';

@Injectable()
export class ErrorHttpInterceptor implements HttpInterceptor {

  private jwtHelper = new JwtHelper();

  constructor(private snackBar: MatSnackBar, private router: Router) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).catch(error => {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 401 || error.status === 403) {
          // JWT expired, go to login
          const currentUser = JSON.parse(localStorage.getItem('currentUser'));
          if(currentUser && this.jwtHelper.isTokenExpired(currentUser.token)){
           localStorage.clear();
           this.router.navigate(['/login']);
          }
        }
        this.snackBar.open(error['error']['message'], 'Close', {duration: 2000});
      }else {
        this.snackBar.open('uhh we got some error!', 'Close', {duration: 2000});
      }
      return Observable.throw(error);
    });
  }
}
