import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { TranslateService } from '@ngx-translate/core';
import { Base } from '../../libs/base';
import moment from 'moment';
import 'moment/locale/th';
import { LogInOutProvider } from '../log-in-out/log-in-out';

@Injectable()
export class LanguageProvider {
  private static LANGUAGE_AVAILABLE = ['en-US', 'th-TH'];
  public static DEFAULT_LANG: string = 'en-US';

  constructor(public http: Http, private logInOutProvider: LogInOutProvider) {
  }

  public initializeLanguageAndTranslate(translateService: TranslateService) {
    return new Promise(resolve => {
      let userLang: string;
      if (Base._memberProfile.language) {
        userLang = Base._memberProfile.language;
      } else {
        userLang = navigator.language;
      }

      userLang = /(en-US|th-TH)/gi.test(userLang) ? userLang : LanguageProvider.DEFAULT_LANG;

      translateService.setDefaultLang(LanguageProvider.DEFAULT_LANG);
      this.changeLanguageTo(userLang).then(result => {
        //save member profile
      });

      translateService.onLangChange.subscribe(event => {
        //set date and time format 
        moment.locale(translateService.currentLang);
      });

      Base._events.subscribe('changeLanguageEvent', () => {
        this.changeLanguage().then((result) => {
        });
      });

      resolve(true);
    });

  }

  public changeLanguage() {
    return new Promise(resolve => {
      let index = LanguageProvider.LANGUAGE_AVAILABLE.indexOf(Base._translateService.currentLang);
      if (index == -1) {
        //no found in available, use default en-US
        index = 0;
      } else {
        if (index == LanguageProvider.LANGUAGE_AVAILABLE.length - 1) {
          index = 0;
        } else {
          index++;
        }
      }
      Base._translateService.use(LanguageProvider.LANGUAGE_AVAILABLE[index]);
      Base._memberProfile.language = LanguageProvider.LANGUAGE_AVAILABLE[index];
      this.logInOutProvider.saveMemberProfile(Base._memberProfile).then(() => {
        resolve(true);
      });
    });
  }

  public changeLanguageTo(userLang: string) {
    return new Promise(resolve => {
      userLang = this.getLanguage(userLang);
      let index = LanguageProvider.LANGUAGE_AVAILABLE.indexOf(userLang);
      if (index == -1) {
        //no found in available, use default en-US
        userLang = LanguageProvider.LANGUAGE_AVAILABLE[0];
      }
      Base._translateService.use(userLang);
      Base._memberProfile.language = Base._translateService.currentLang;
      this.logInOutProvider.saveMemberProfile(Base._memberProfile).then(() => {
        resolve(true);
      });
    });
  }

  private getLanguage(language: string) {
    var formats = {
      'th': 'th-TH',
      'th_TH': 'th-TH',
      'th-TH': 'th-TH',
      'en': 'en-US',
      'en_US': 'en-US',
      'en-US': 'en-US'
    };
    return formats[language] || 'en-US';
  }
}
