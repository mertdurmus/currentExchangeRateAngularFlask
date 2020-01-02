import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Currency } from '../models/currency.model';


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }
  path = 'http://127.0.0.1:5000/api';

  getCurrency(): Observable<Currency[]> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'
       })
    };
    return this.http.get<Currency[]>(this.path + '/usd',httpOptions).pipe(
       tap(data => console.log(JSON.stringify(data))),
       catchError(this.handleError)
     );
   }

   handleError(err: HttpErrorResponse) {

    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'bir hata oluştu' + err.error.message;
    } else {
      errorMessage = 'sistemsel bir hata';
    }

    return throwError(errorMessage);
  }
}
