import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemberProfileShortComponent } from './member-profile-short';

@NgModule({
  declarations: [
    MemberProfileShortComponent,
  ],
  imports: [
    IonicPageModule.forChild(MemberProfileShortComponent),
  ],
  exports: [
    MemberProfileShortComponent
  ]
})
export class MemberProfileShortComponentModule {}
