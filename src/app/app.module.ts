import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule  } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LueggDirective } from './luegg.directive';



export const firebaseConfig = {
  apiKey: "AIzaSyBLvfL7B1PqYm08WgdlFY7N-li1dFJps6E",
  authDomain: "angular-chat-1cba0.firebaseapp.com",
  databaseURL: "https://angular-chat-1cba0.firebaseio.com",
  projectId: "angular-chat-1cba0",
  storageBucket: "angular-chat-1cba0.appspot.com",
  messagingSenderId: "792962521375"
};

@NgModule({
  declarations: [
    AppComponent,
    LueggDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
