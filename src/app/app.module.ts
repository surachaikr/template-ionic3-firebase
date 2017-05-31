import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule, Http } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Firebase } from '@ionic-native/firebase';

import { SharedModule } from '../libs/shared.module';
import { DataServerProvider } from '../providers/data-server/data-server';

import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
import { HomeTabsPage } from '../pages/home-tabs/home-tabs';
import { createTranslateLoader } from '../libs/util';
import { LanguageDisplayComponentModule } from '../components/language-display/language-display.module';
import { MemberProfileComponentModule } from '../components/member-profile/member-profile.module';
import { DataGeneralProvider } from '../providers/data-general/data-general';
import { MemberProfileShortComponentModule } from '../components/member-profile-short/member-profile-short.module';
import { PhonePipeModule } from '../pipes/phone/phone.module';
import { LogInOutProvider } from '../providers/log-in-out/log-in-out';
import { LanguageProvider } from '../providers/language/language';
import { NotificationProvider } from '../providers/notification/notification';

@NgModule({
  declarations: [
    MyApp,
    //HomePage
    HomeTabsPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot({
      name: 'TemplateIonic3andFirebase'
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    SharedModule,
    LanguageDisplayComponentModule,
    MemberProfileShortComponentModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //HomePage
    HomeTabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    LanguageDisplayComponentModule,
    MemberProfileComponentModule,
    MemberProfileShortComponentModule,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataServerProvider,
    DataGeneralProvider,
    PhonePipeModule,
    LogInOutProvider,
    LanguageProvider,
    NotificationProvider
  ]
})
export class AppModule { }
