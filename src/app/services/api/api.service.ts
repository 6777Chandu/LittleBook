import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  url: string;

  /**
   * @description fetches API data through HTTP Client
   * @param url The URL of the API
   * @returns Observable with API data
   */
  fetchAPI(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
}
