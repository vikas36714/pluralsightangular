import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
// import  *  as  data  from  '../api/products/products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 private productUrl = 'assets/api/products/products.json';


constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All: '+ JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse){
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `An Error occured: ${err.error.message}`;
            console.log(errorMessage);
        } else {
            // server-side error
            errorMessage = `Server returned Code: ${err.status}\nError Message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
  }

}
