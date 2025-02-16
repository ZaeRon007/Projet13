import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CoreRoutingModule } from "./core-routing.module";
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from './components/home/home.component';
import { TalkjsChatComponent } from "./components/talkjs-chat/talkjs-chat.component";


@NgModule({
    declarations: [
      LoginComponent,
      HomeComponent,
      TalkjsChatComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      CoreRoutingModule,
      FormsModule,
      MatButtonModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      MatGridListModule,
      MatCardModule,
      MatIconModule,
    ]
  })
  export class CoreModule { 
    constructor(){
    }
  }