import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/services/user';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  user!: User;

  constructor(private authService: AuthService) {
    const user = authService.getUser();
    if(user) this.user = user;
  }

  ngOnInit(): void {
  }

}
