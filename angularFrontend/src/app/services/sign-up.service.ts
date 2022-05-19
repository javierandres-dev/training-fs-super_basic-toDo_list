import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private http: HttpClient) {}

  url = environment.usersApiUrl;

  signUpUser(user: any) {
    return this.http.post<any>(this.url, user);
  }
}
