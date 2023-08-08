import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private authSrv: AuthenticationService,
    private router_auth: Router
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //console.log('auth interceptor - url: ',request.url);

    //Exclude requests that don't require a token
    if (request.url.includes('postLogIn') || request.url.includes('postResetPassword')) {
      //console.log('auth interceptor 2 - url: ',request.url);

      return next.handle(request);

    } else {
      const token = this.authSrv.getToken();

      // If we have a token, we set it to the header
      if (token) {
        // Clone the request and add the token to the headers
        const modifiedRequest = request.clone({
          setHeaders: {
            'Content-Type': 'application/json',
            'x-access-token': token
            //Authorization: `Authorization token ${token}`
          }
        });


        // Pass the modified request to the next handler
        return next.handle(modifiedRequest).pipe(
          catchError((err) => {
            if (err instanceof HttpErrorResponse) {
              if (err.status === 401) {
                this.authSrv.removeToken();

                // redirect user to the logout page
                this.router_auth.navigate(['/login']);
              }
            }
            return throwError(err);
          })
        )
      }
    }
  }


}
