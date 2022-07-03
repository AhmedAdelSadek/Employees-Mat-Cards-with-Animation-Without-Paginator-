import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { IEmployee } from "../interfaces/IEmployee";

@Injectable({
  providedIn: "root",
})
export class ImportService {
  constructor (private _httpClient: HttpClient) { }
  /**
   * Gets data
   * @returns data
   */
  getData(): Observable<IEmployee[]> {
    let url = `https://jsonplaceholder.typicode.com/users`;
    return this._httpClient.get<IEmployee[]>(url).pipe(catchError(this.handleError));
  }
  /**
   * Get Errors
   *
   * @returns {errorMessage}
   */
  handleError<T extends IError<T>>(error: T): Observable<T> {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Client-Side Error : ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Server-Side Error : ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    return throwError(() => {
      const error: any = new Error(errorMessage);
      error.timestamp = Date.now();
      return error;
    });
  }
}

export interface IError<T> {
  error: T;
  status: T;
  message: T;
}