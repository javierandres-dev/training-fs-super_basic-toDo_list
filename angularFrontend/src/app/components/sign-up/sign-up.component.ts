import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../../services/sign-up.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(private signUpService: SignUpService, private router: Router) {}

  user = {
    name: '',
    email: '',
    password: '',
  };

  ngOnInit(): void {}

  signUp() {
    this.signUpService.signUpUser(this.user).subscribe(
      (res) => {
        if (res.success) {
          this.router.navigate(['/login']);
        }
      },
      (err) => {
        console.log('err:', err);
      }
    );
  }
}
