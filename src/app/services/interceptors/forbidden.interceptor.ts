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
    if(request.url.includes('türkiyeli')) { // return 403 forbidden if the request url contains 'türkiyeli'
      return next.handle(request.clone({ url: environment.apiUrl+'/gts?ara=türk'}))
    }
    return next.handle(request);
  }
}
