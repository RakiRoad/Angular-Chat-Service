import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';

var provider = new firebase.auth.FacebookAuthProvider();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.items = af.list('/messages', {
      query: {
        limitToLast: 10
      }
    });

    this.user = this.afAuth.authState;

  }
  
  login() {
    this.afAuth.auth.signInWithPopup(provider);
  }

  logout() {
      this.afAuth.auth.signOut();
  }

  Send(elMessage: string) {
      this.items.push({ message: elMessage, name: firebase.auth().currentUser.displayName});
      this.msgVal = '';
  }
}

/*
    this.afAuth.auth.signInWithPopup(provider).then(function(result) {
      // The firebase.User instance:
      var user = result.user;
      // The Facebook firebase.auth.AuthCredential containing the Facebook
      // access token:
      var 
*/