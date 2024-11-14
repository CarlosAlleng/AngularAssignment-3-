

import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  followersCount: number = 250;
  message: string = '';
  messages: string[] = [];

  follow(): void {
    this.followersCount++;
  }

  postMessage(): void {
    if (this.message.trim()) {
      this.messages.push(this.message.trim());
      this.message = ''; 
    }
  }
}



