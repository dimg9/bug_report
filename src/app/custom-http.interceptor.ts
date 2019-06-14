import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class CustomHttpInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent> {

    req = req.clone({
      setHeaders: {
        Authorization: 'code.hub.ng5.token'
      }
    });

    return next.handle(req)
      .pipe( map((event: HttpSentEvent) => {
        return event;
      }));
  }
}
