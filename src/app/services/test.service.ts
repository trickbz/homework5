import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  public get createDataHttp() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    return this.http.get(url);
  }
}
