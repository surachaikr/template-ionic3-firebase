import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
import { Firebase } from '@ionic-native/firebase';
import { Platform } from 'ionic-angular';
import { Base } from '../../libs/base';
import { Log } from '../../libs/log';

@Injectable()
export class NotificationProvider {

  constructor(public http: Http, private firebaseN: Firebase, private platform: Platform) {
  }

private log: Log = Log.getLog('NotificationProvider');

    public startNotify() {
        if (this.platform.is('cordova')) {
            this.notificationOnCordova();
        } else {
            this.notificationOnWeb();
        }
    }

    private notificationOnCordova() {
        this.firebaseN.getToken().then(currentToken => {
            this.keepToken(currentToken, null);
            Base._notifyToken = currentToken;
            this.log.debug('Your cordova token is ' + currentToken);
        }).catch(err => {
            this.log.error('An error occurred while retrieving cordova token. ' + err);
        });

        this.firebaseN.onTokenRefresh().subscribe(refreshedToken => {
            this.keepToken(Base._notifyToken, refreshedToken);
            Base._notifyToken = refreshedToken;
            this.log.debug('Your cordova refresh token is ' + refreshedToken);
        }, (err) => {
            this.log.error('Unable to retrieve cordova refreshed token ' + err);
        });

        if (this.platform.is('ios')) {
            this.firebaseN.grantPermission().then(() => {
                this.onNotificationOpen();
            }).catch(err => {
                this.log.error('Unable to get permission to notify cordova with ' + err);
            });
        } else {
            this.onNotificationOpen();
        }
    }

    private onNotificationOpen() {
        this.firebaseN.onNotificationOpen().subscribe((payload) => {
            if (payload.tap) {
                this.log.debug('Message received when backgroud. ' + payload.welcome + '->' + JSON.stringify(payload));
            } else {
                this.log.debug('Message received whe foregroud. ' + payload.welcome + '->' + JSON.stringify(payload));
            }

        }, (err) => {
            this.log.error('Unable to retrieve cordova payload ' + err);
        });
    }

    private notificationOnWeb() {
        let messaging = firebase.messaging();
        this.log.debug('notification1')
        messaging.requestPermission().then(() => {
            messaging.getToken().then(currentToken => {
                this.log.debug('notification3')
                this.keepToken(currentToken, null);
                Base._notifyToken = currentToken;
                this.log.debug('Your token is ' + currentToken);
            }).catch(err => {
                this.log.error('An error occurred while retrieving token. ' + err);
            });

            messaging.onTokenRefresh(() => {
                this.log.debug('notification4')
                messaging.getToken().then(refreshedToken => {
                    this.keepToken(Base._notifyToken, refreshedToken);
                    Base._notifyToken = refreshedToken;
                    this.log.debug('Your refresh token is ' + refreshedToken);
                }).catch(err => {
                    this.log.error('Unable to retrieve refreshed token ' + err);
                });
            });

            messaging.onMessage(payload => {
                let pl: any = payload;
                this.log.debug('Message received. ' + pl.data.welcome + '->' + JSON.stringify(pl));
            });

        }).catch(err => {
            this.log.error('Unable to get permission to notify with ' + err);
        });
    }

    private keepToken(token: any, tokenRefresh: any) {
        let platformType: string;
        if (this.platform.is('core')) {
            platformType = 'web';
        } else if (this.platform.is('ios')) {
            platformType = 'ios';
        } else if (this.platform.is('android')) {
            platformType = 'android';
        }

        if (tokenRefresh) {
            //remove old token
            firebase.database().ref('notification/' + Base._memberProfile.id + '/' + token).remove();
            //write refresh token
            firebase.database().ref('notification/' + Base._memberProfile.id + '/' + tokenRefresh).set({
                platformType: platformType
            });
        } else {
            //write new token
            firebase.database().ref('notification/' + Base._memberProfile.id + '/' + token).set({
                platformType: platformType
            });
        }
    }
}
