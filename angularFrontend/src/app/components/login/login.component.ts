import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  user = {
    username: '',
    password: '',
  };

  ngOnInit(): void {}

  login() {
    this.loginService.loginUser(this.user).subscribe(
      (res) => {
        if (res.success) {
          sessionStorage.setItem('tkn', res.success);
          this.router.navigate(['/private']);
        }
      },
      (err) => {
        console.log('err:', err);
      }
    );
  }
}
