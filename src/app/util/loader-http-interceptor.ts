import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import {LoaderService} from '../service/loader.service';

@Injectable()
export class LoaderHttpInterceptor implements HttpInterceptor {

  private pendingRequests: number = 0;

  constructor(private loaderService:LoaderService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.pendingRequests++;
    //var timer = Observable.timer(100);
    //timer.subscribe(t => {
    if(1 === this.pendingRequests) {
      this.loaderService.show();
    }
    //});
    return next
      .handle(req)
      .finally(()=> {
          this.pendingRequests--;
          if (0 === this.pendingRequests) {
            this.loaderService.hide();
          }
      });
  }
}
