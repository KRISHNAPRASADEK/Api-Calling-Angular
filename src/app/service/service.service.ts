import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  baseUrl: string = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) {}

  //function for get all Users
  getAllUsers(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
