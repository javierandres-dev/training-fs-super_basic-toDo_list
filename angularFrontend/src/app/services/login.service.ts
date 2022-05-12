import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private router: Router) {}

  private URL = 'http://localhost:4100/api/v1/users/login';

  loginUser(user: any) {
    return this.http.post<any>(this.URL, user);
  }

  logoutUser() {
    sessionStorage.removeItem('tkn');
    this.router.navigate(['/login']);
  }
}
