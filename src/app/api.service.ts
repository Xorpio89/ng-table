import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private userUrl = 'https://jsonplaceholder.typicode.com';
  private productUrl = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    const url = `${this.userUrl}/users`;
    return this.http.get(url);
  }
  getProducts(): Observable<any> {
    const url = `${this.productUrl}/products`;
    return this.http.get(url);
  }
}
