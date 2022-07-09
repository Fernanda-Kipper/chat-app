import { Injectable } from '@angular/core';

import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { User } from './user';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userData!: User | undefined;

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private localStorage: LocalStorageService<User>
  ) {
    let user = this.localStorage.getItem('user')
    if(user) this.userData = user
    this.checkAuth()
  }

  checkAuth() {
    this.fireAuth.authState.subscribe((user) => {
      if (user && user.uid === this.userData?.uid) {
        this.userData = {
          uid: user.uid,
          email: user.email ?? '',
          displayName: user.displayName ?? '',
          photoURL: user.photoURL ?? '',
          emailVerified: user.emailVerified
        };
        this.localStorage.setItem('user', this.userData);
      } else {
        this.localStorage.setItem('user', null);
        this.router.navigate(['/login']);
      }
    });
  }

  logIn(){
    this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => {
      if(res.user){
        this.userData = {
          uid: res.user.uid,
          email: res.user.email ?? '',
          displayName: res.user.displayName ?? '',
          photoURL: res.user.photoURL ?? '',
          emailVerified: res.user.emailVerified
        }
        this.localStorage.setItem('user', this.userData)
        this.router.navigate([''])
      }
    })
  }

  logout(){
    this.fireAuth.signOut().then(res => {
      this.localStorage.setItem('user', null);
      this.userData = undefined
      this.router.navigate([''])
    })
  }

  isAuthenticated(){
    return !!this.userData
  }

  getUser(){
    return this.userData;
  }
}
