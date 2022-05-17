import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PrivateService {
  URL = 'http://localhost:4100/api/v1/todos';

  constructor(private http: HttpClient) {}
  //c
  readTodos() {
    return this.http.get<any>(this.URL);
  }
  //r
  //u
  //d
}
