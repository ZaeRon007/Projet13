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
  admin: string = "admin";

  constructor(private userService: UserService, 
              private router: Router,
              private sessionService: sessionService){

  }

  user: userLogin = {email: '', password: ''};
  error: string = "Email ou mot de passe invalide !!";
  showError: boolean = false;

  isFormValid(): boolean{
    if(!!this.user.email && !!this.user.password)
      return true;
    return false;
  }

  login(): void {
    this.userService.getUsers().subscribe({
        next: (users) => {
            const user = users.find((u: userEntity) => u.email === this.user.email && u.password === this.user.password);
            if (user) {
                console.log('Authentification réussie');
                this.sessionService.logInUser(user);
                this.sessionService.saveConnectedUsers(users);
                if (user.role === this.admin) {
                    this.router.navigate(['chat']);
                } else {
                    this.router.navigate(['home']);
                }
            } else {
                this.showError = true;
            }
        }, error: () => {
            this.showError = true;
        }
    })
}
}
