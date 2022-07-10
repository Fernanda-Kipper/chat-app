import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import * as fs from 'firebase/firestore';
import { NgForm } from '@angular/forms';

import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/services/user';

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
  collectionRef!: AngularFirestoreCollection
  chatContainer!: HTMLElement

  constructor(
    private authService: AuthService,
    private db: AngularFirestore
  ) {
    const user = this.authService.getUser();
    if(user) this.user = user;
  }

  ngOnInit(): void {
    const element = document.getElementById('chat-container')
    if(element) this.chatContainer = element

    this.collectionRef = this.db.collection<Message>('messages', ref => ref.orderBy('createdAt'));
    this.collectionRef.valueChanges().subscribe(
      val => {
        this.messages = val as Message[]
        setTimeout(() => {
          this.scrollToBottom()
        }, 500)
      }
    )
  }

  sendMessage(text: string){
    this.db.collection('messages').add({
      text,
      createdAt: fs.serverTimestamp(),
      uid: this.user.uid,
      photoURL: this.user.photoURL,
      username: this.user.displayName
    }).then(res => console.log(res))
  }

  scrollToBottom(){
    this.chatContainer.scroll({ top: this.chatContainer.scrollHeight })
  }

  onSubmit(event: NgForm){
    if(!event.value.message) return
    this.sendMessage(event.value.message)
    this.scrollToBottom()
    event.reset()
  }
}
