import { Injectable } from '@angular/core';
import { userEntity } from '../models/userEntity';

@Injectable({
    providedIn: 'root'
})
export class sessionService {

    user: userEntity = {
        id: '',
        username: '',
        password: '',
        email: '',
        pictureUrl: '',
        role: '',
    }
    users: userEntity[] = [];

    constructor() {
    }

    logInUser(inputUser: userEntity): void {
        console.log('logIn user:', inputUser);
        this.user = inputUser;
    }

    saveConnectedUsers(inputUsers: userEntity[]): void {
        console.log('saveConnectedUsers user:', inputUsers);
        this.users = inputUsers;
    }
}
