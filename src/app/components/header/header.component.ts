import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/services/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user!: User;
  isUserOpen: boolean = false;

  constructor(private authService: AuthService) {
    const user = authService.getUser();
    if(user) this.user = user;
  }

  ngOnInit(): void {
  }

  handleLogout(){
    this.authService.logout();
  }

  handleOpen(){
    this.isUserOpen = !this.isUserOpen;
  }
}
