import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private router: Router) {}

  url = environment.usersApiUrl;

  loginUser(user: any) {
    return this.http.post<any>(`${this.url}/login`, user);
  }

  logoutUser() {
    sessionStorage.removeItem('tkn');
    this.router.navigate(['/login']);
  }
}
