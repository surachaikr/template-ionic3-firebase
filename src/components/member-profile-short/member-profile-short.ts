import { Component } from '@angular/core';
import { Events } from 'ionic-angular';
import {Base} from '../../libs/base'; 
import { MemberProfile } from '../../libs/model/member_profile';

@Component({
  selector: 'member-profile-short',
  templateUrl: 'member-profile-short.html'
})
export class MemberProfileShortComponent extends Base {
  memberProfile: MemberProfile = Base._memberProfile;

  constructor(private events: Events) {
    super();
    this.events.subscribe('memberProfileChange', (memberProfile) => {
      this.memberProfile = memberProfile;
    })
  }

}
