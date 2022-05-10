import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  user = {
    name: '',
    email: '',
    password: '',
  };

  constructor(private authorizationService: AuthorizationService) {}

  ngOnInit(): void {}

  signUp() {
    this.authorizationService.signUpUser(this.user).subscribe(
      (res) => {
        console.log('res:', res);
      },
      (err) => {
        console.log('err:', err);
      }
    );
  }
}
