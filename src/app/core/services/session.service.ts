import {Injectable} from '@angular/core';
import { userEntity } from '../models/userEntity';
import { userLogin } from '../models/dto/userLogin';

@Injectable({
    providedIn: 'root'
})
export class sessionService {

    private user: userEntity = new userEntity();
    private users: userEntity[] = [];

    constructor() {
    }

    logInUser(inputUser: userEntity): void {
        this.user = inputUser;
    }

    saveConnectedUsers(inputUsers: userEntity[]): void {
        this.users = inputUsers;
    }

    getConnectedUser(): userEntity {
        return this.user;
    }

}
