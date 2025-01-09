import { Component } from '@angular/core';
import { userEntity } from '../../models/userEntity';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user: userEntity = {email: '', password: ''};
  showError: boolean = false;

  isFormValid(): boolean{
    if(!!this.user.email && !!this.user.password)
      return true;
    return false;
  }

  onSubmit(){
    console.log('user:', this.user);
  }
}
