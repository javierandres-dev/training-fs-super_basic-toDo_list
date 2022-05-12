import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  private URL = 'http://localhost:4100/api/v1/users/login';

  loginUser(user: any) {
    console.log('user:', user);
    return this.http.post<any>(this.URL, user);
  }
}
