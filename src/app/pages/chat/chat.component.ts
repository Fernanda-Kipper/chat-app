import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/services/user';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as fs from 'firebase/firestore';

interface Message {
  photoURL: string,
  text: string,
  uid: string,
  username: string
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  user!: User;
  messages!: Message[]

  constructor(
    private authService: AuthService,
    private db: AngularFirestore
  ) {
    const user = this.authService.getUser();
    if(user) this.user = user;
  }

  ngOnInit(): void {
    this.db.collection('messages').valueChanges().subscribe(
      val => this.messages = val as Message[]
    )
  }

  handleSubmitMessage(text: string){
    this.db.collection('messages').add({
      text,
      createdAt: fs.serverTimestamp(),
      uid: this.user.uid,
      photoURL: this.user.photoURL,
      username: this.user.displayName
    })
  }
}
