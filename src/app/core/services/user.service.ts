import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { userEntity } from '../models/userEntity';
import { userLogin } from '../models/dto/userLogin';
import { sessionService } from './session.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private usersUrl = './assets/users.json';
    private admin: string = "admin";

    constructor(private http: HttpClient, 
                private sessionService: sessionService,
                private router: Router) {
    }

    getUsers(): Observable<userEntity[]> {
        return this.http.get<userEntity[]>(this.usersUrl);
    }

    login(inputUser: userLogin): boolean {
        this.getUsers().subscribe({
            next: (users) => {
                const user = users.find((u: userEntity) => u.email === inputUser.email && u.password === inputUser.password);
                if (user) {
                    console.log('Authentification réussie');
                    this.sessionService.logInUser(user);
                    this.sessionService.saveConnectedUsers(users);
                    if (user.role === this.admin) {
                        this.router.navigate(['contact']);
                    } else {
                        this.router.navigate(['home']);
                    }
                    return false;
                } else {
                    return true;
                }
            }, error: () => {
                return true;
            }
        })
        return false;
    }

}
