import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable()
export class ForbiddenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.includes('türkiyeli')) { // redirect to türk
      request = request.clone({
        url: request.url.replace('türkiyeli', 'türk')})
    }
    return next.handle(request);
  }
}
