import {Injectable} from '@angular/core';
import Talk from "talkjs";
import {sessionService} from './session.service';
import { userEntity } from '../models/userEntity';

@Injectable({
    providedIn: 'root'
})
export class TalkService {
    private currentUser!: Talk.User;

    constructor(private sessionService: sessionService) {
    }

    /**
     * allow to create a talk user
     * @param applicationUser user entity containing informations
     * @returns talk user
     */
    async createTalkUser(applicationUser: userEntity) {
        await Talk.ready;
        return new Talk.User({
            id: applicationUser.id,
            name: applicationUser.username,
            photoUrl: applicationUser.pictureUrl,
            role: applicationUser.role
        });
    }

    /**
     * allow to create a session 
     * @returns the created session
     */
    async createCurrentSession() {
        await Talk.ready;
        const user = {
            id: this.sessionService.user.id,
            username: this.sessionService.user.username,
            password: '',
            email: this.sessionService.user.email,
            pictureUrl: this.sessionService.user.pictureUrl,
            role: this.sessionService.user.role
        };
        this.currentUser = await this.createTalkUser(user);
        const session = new Talk.Session({
            appId: 'tkMsuNGA', me: this.currentUser
        });
        return session;
    }

    /**
     * allow to create or get a conversation between users
     * @param session 
     * @param otherApplicationUser 
     * @returns 
     */
    async getOrCreateConversation(session: Talk.Session, otherApplicationUser: any) {
        const otherUser = await this.createTalkUser(otherApplicationUser);
        const conversation = session.getOrCreateConversation(Talk.oneOnOneId(this.currentUser, otherUser));
        conversation.setParticipant(this.currentUser);
        conversation.setParticipant(otherUser);
        return conversation;
    }

    /**
     * allow to display a conversation
     * @param session 
     * @returns 
     */
    async createInbox(session: Talk.Session) {
        let otherApplicationUser = {
            id: '',
            username: '',
            password: '',
            email: '',
            photoUrl: '',
        };

        const userIndex = (this.sessionService.user.id == '0') ? 1 : 0;
        otherApplicationUser = {
            id: this.sessionService.users[userIndex].id,
            username: this.sessionService.users[userIndex].username,
            password: '',
            email: this.sessionService.users[userIndex].email,
            photoUrl: this.sessionService.users[userIndex].pictureUrl,
        };

        const conversation = await this.getOrCreateConversation(session, otherApplicationUser);
        const inbox = session.createInbox();
        inbox.select(conversation);
        return inbox;
    }
}
