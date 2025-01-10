import { Component, ElementRef, ViewChild } from '@angular/core';
import { TalkService } from '../../services/talk.service';
import Talk from 'talkjs';

@Component({
  selector: 'app-talkjs-chat',
  standalone: false,

  templateUrl: './talkjs-chat.component.html',
  styleUrl: './talkjs-chat.component.css'
})
export class TalkjsChatComponent {
  @ViewChild('talkjsContainer') talkjsContainer!: ElementRef;
  private inbox!: Talk.Inbox;
  private session!: Talk.Session;

  constructor(private talkService: TalkService) {
  }

  ngOnInit() {
    this.createInbox();
  }

  private async createInbox() {
    const session = await this.talkService.createCurrentSession();
    this.inbox = await this.talkService.createInbox(session);
    this.inbox.mount(this.talkjsContainer.nativeElement);
  }
}
