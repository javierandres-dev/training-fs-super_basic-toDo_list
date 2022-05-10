import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private URL = 'http://localhost:4100/api/v1/users';

  constructor(private http: HttpClient) {}

  signUpUser(user: any) {
    //console.log('user:', user);
    return this.http.post<any>(this.URL, user);
  }
}
