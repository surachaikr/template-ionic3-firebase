import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from "firebase";
import { Http } from '@angular/http';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  initApp() {
    firebase.initializeApp({
      apiKey: "AIzaSyBW3wgFwhHIUHFJtHbaM43-kYA5VPnF1iA",
      authDomain: "templateionic3firebase.firebaseapp.com",
      databaseURL: "https://templateionic3firebase.firebaseio.com",
      projectId: "templateionic3firebase",
      storageBucket: "templateionic3firebase.appspot.com",
      messagingSenderId: "262518369997"
    });
  }
}

