
import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpEvent,
  HttpErrorResponse,
  HttpEventType,
  HttpParams
} from "@angular/common/http";
import { Observable } from "rxjs";
import { throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Router, RouterLink } from "@angular/router";
import { environment } from "../../enviroments/enviroments";

@Injectable({
  providedIn: "root"
})
export class HttpsharedService {
  baseUrl = environment.apiUrl;
  mobileBaseUrl = environment.apiUrl;
  //baseUrl = environment.baseUrlLocalhost;
  constructor(private _http: HttpClient) { }

  postCall(routeUrl: string, data: any): Observable<any> {
    console.log(routeUrl, this.baseUrl, data, '---------------------------------------');
    return this._http.post<any>(`${this.baseUrl}${routeUrl}`, data);
  }

  postMobileCall(routeUrl: string, data: any): Observable<any> {
    return this._http.post<any>(`${this.mobileBaseUrl}${routeUrl}`, data);
  }
  getCall(routeUrl: string): Observable<any> {
    return this._http.get<any>(`${this.baseUrl}${routeUrl}`);
  }

  putCall(routeUrl: string, data: any): Observable<any> {
    return this._http.put<any>(`${this.baseUrl}${routeUrl}`, data);
  }

  patchCall(routeUrl: string, data: any): Observable<any> {
    return this._http.patch<any>(`${this.baseUrl}${routeUrl}`, data);
  }
  deleteCall(routeUrl: string, id: any): Observable<any> {
    return this._http.delete<any>(`${this.baseUrl}${routeUrl}/${id}`);
  }

  searchSecurities(query: string = '', page: number = 1): Observable<any[]> {
    let params = new HttpParams().set('page', page.toString());
    if (query) {
      params = params.set('name', query);
    }
    return this._http.get<any[]>(`${this.baseUrl}/api/stocks-name/`, { params });
  }
}
