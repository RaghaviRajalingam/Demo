import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly url = 'https://mocki.io/v1/a638c068-89c2-4e24-8447-20a03f5e7b778';
  // private readonly apiurl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private readonly httpClient: HttpClient) { }
  getDetails(): Observable <any>{
    return this.httpClient.get(this.url).pipe(catchError(this.handleError));
  }
  // getData(): Observable <any>{
  //   return this.httpClient.get(this.apiurl).pipe(catchError(this.handleError));
  // }
  handleError(error: HttpErrorResponse){
    return throwError(error)
  }
}
