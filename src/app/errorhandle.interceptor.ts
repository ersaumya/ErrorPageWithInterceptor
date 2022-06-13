import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorhandleInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(this.handleError)
    );
  }
  
  handleError(error: HttpErrorResponse){
    if(error.status===404 ){
      return throwError(()=> new Error(`The server can not find the requested resource,Client-side error with status code ${error.status}`));
      
    }
    else{
      console.error('An error occurred:', error.error);
    }
    return throwError(()=> new Error(error.message));
  }
}
