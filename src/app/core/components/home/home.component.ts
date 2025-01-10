import { Component } from '@angular/core';
import { sessionService } from '../../services/session.service';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  admin!: boolean;

  constructor(private sessionService: sessionService){
    if (sessionService.getConnectedUser().role == 'admin')
      this.admin = true;
    else
      this.admin = false;
  }



}
