import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpCacheRequestInterceptor implements HttpInterceptor {
  cachedRequests = new Map<string, any>();

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const { urlWithParams} = request;
    const cachedResponse = this.cachedRequests.get(urlWithParams);

    if (cachedResponse) {
      return of(cachedResponse);
   }

    return next.handle(request).pipe(
      tap(event => {
         if (event instanceof HttpResponse) {
           this.cachedRequests.set(urlWithParams, event);
         }
      })
   );
  }
}
