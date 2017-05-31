import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

import firebase from "firebase";
import { Firebase } from '@ionic-native/firebase';
import { TranslateService } from '@ngx-translate/core';
import { Base } from '../libs/base';
import { Log } from '../libs/log';
import { MiscUtil } from '../libs/util';
import { DataGeneralProvider } from '../providers/data-general/data-general';
import { LogInOutProvider } from '../providers/log-in-out/log-in-out';
import { LanguageProvider } from '../providers/language/language';
import { NotificationProvider } from '../providers/notification/notification';
import { MemberProfile } from '../libs/model/member_profile';
//import { HomePage } from '../pages/home/home';
import { HomeTabsPage } from '../pages/home-tabs/home-tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  private log: Log = Log.getLog('MyApp');

  constructor(private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private translateService: TranslateService, private storage: Storage,
    private http: Http, private events: Events,
    private dataGeneralProvider: DataGeneralProvider,
    private firebaseN: Firebase,
    private logInOutProvider: LogInOutProvider,
    private languageProvider: LanguageProvider,
    private notificationProvider: NotificationProvider) {

    Base._translateService = this.translateService;
    Base._http = this.http;
    Base._events = this.events;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.initApp().then(result => {
        this.log.debug('load app is ok');
      })
    });
  }

  private initApp() {
    return new Promise(resolve => {
      Base._platform = this.platform;
      this.dataGeneralProvider.loadAppConfig().then(() => {
        //set application language
        this.translateService.setDefaultLang('en-US');

        firebase.initializeApp({
          apiKey: "AIzaSyBW3wgFwhHIUHFJtHbaM43-kYA5VPnF1iA",
          authDomain: "templateionic3firebase.firebaseapp.com",
          databaseURL: "https://templateionic3firebase.firebaseio.com",
          projectId: "templateionic3firebase",
          storageBucket: "templateionic3firebase.appspot.com",
          messagingSenderId: "262518369997"
        });

        this.storage.ready().then(() => {
          Base._storage = this.storage;
          Base._storage.get('currentUid').then((currentUid) => {
            //prepare current user
            Base._currentUid = currentUid;
            Base._storage.get(MiscUtil.getStorageDataName(Base._storageMemberProfile)).then((memberProfile) => {
              if (memberProfile) {
                Base._memberProfile = memberProfile;
              } else {
                Base._memberProfile = new MemberProfile();
              }
              Base._currentUid = Base._memberProfile.id;

              //login, initial language and translate object
              if (!Base._currentUid || Base._currentUid == '0') {
                //first use app
                this.logInOutProvider.anonymousLogin().then((user) => {
                  this.actionAfterLogin().then(result => {
                    resolve(result);
                  });
                });
              } else {
                //reentry app
                this.actionAfterLogin().then(result => {
                  resolve(result);
                });
              }
            });
          });
        });
      });
    });
  }

  private actionAfterLogin() {
    return new Promise(resolve => {
      this.notificationProvider.startNotify();

      this.languageProvider.initializeLanguageAndTranslate(Base._translateService).then(() => {
        //this.rootPage = HomePage;
        this.rootPage = HomeTabsPage;
        resolve(true);
      });
    });
  }

  changeLanguage() {
    this.events.publish('changeLanguageEvent');
  }

}

