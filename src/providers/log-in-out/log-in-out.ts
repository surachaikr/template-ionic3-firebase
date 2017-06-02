import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Base } from '../../libs/base';
import { Log } from '../../libs/log';
import { MemberProfile } from '../../libs/model/member_profile';
import { MiscUtil } from '../../libs/util';
import firebase from 'firebase';

@Injectable()
export class LogInOutProvider {
  private log: Log = Log.getLog('LogInOutProvider');

  constructor(public http: Http) {
  }

  public anonymousLogin() {
    return new Promise(resolve => {
      firebase.auth().signInAnonymously().then((user) => {
        Base._currentUid = user.uid;
        Base._storage.set(Base._storageCurrentUid, Base._currentUid);

        let memberProfile: MemberProfile = new MemberProfile();
        memberProfile.id = user.uid;
        memberProfile.type = 'ANONYMOUS';
        memberProfile.name = 'GUEST';
        this.log.debug('memberProfile1:' + JSON.stringify(memberProfile))
        Base._memberProfile = memberProfile;
        this.saveMemberProfile(Base._memberProfile).then((result) => {
          resolve(result);
        });
      });
    });
  }

  public saveMemberProfile(memberProfile: MemberProfile) {
    //save to storage and database
    return new Promise(resolve => {
      if (!memberProfile.createdDate) {
        memberProfile.createdDate = new Date().getTime();
        memberProfile.lastUpdatedDate = memberProfile.createdDate
      } else {
        memberProfile.lastUpdatedDate = new Date().getTime();
      }
      Base._storage.set(MiscUtil.getStorageDataName(Base._storageMemberProfile), memberProfile).then(() => {
        firebase.database().ref('member/' + memberProfile.id).set({
          profile: memberProfile
        }).then(result => {
          resolve(memberProfile);
        });
        Base._events.publish('memberProfileChange', memberProfile);

      }).catch(() => {
        resolve(false);
      });
    });
  }
}
