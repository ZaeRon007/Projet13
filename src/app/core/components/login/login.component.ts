import { Component } from '@angular/core';
import { userEntity } from '../../models/userEntity';
import { UserService } from '../../services/user.service';
import { userLogin } from '../../models/dto/userLogin';
import { Router } from '@angular/router';
import { sessionService } from '../../services/session.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private userService: UserService) {

  }

  user: userLogin = { email: '', password: '' };
  error: string = "Email ou mot de passe invalide !!";
  showError: boolean = false;

  isFormValid(): boolean {
    if (!!this.user.email && !!this.user.password)
      return true;
    return false;
  }

  login(): void {
    this.showError = this.userService.login(this.user);
  }
}
