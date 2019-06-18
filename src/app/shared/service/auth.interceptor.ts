import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor  {


  intercept(request: HttpRequest<any>, next: HttpHandler): import('rxjs').Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
          Authorization: 'Basic bW9iaWxlYXBpdXNlcjpwYXNzd29yZDEh',
      }
  });

    return next.handle(request);
  }


}