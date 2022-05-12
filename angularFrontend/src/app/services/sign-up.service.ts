import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private http: HttpClient) {}

  private URL = 'http://localhost:4100/api/v1/users';

  signUpUser(user: any) {
    return this.http.post<any>(this.URL, user);
  }
}
