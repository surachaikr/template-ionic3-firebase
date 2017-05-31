import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemberProfileComponent } from './member-profile';

@NgModule({
  declarations: [
    MemberProfileComponent,
  ],
  imports: [
    IonicPageModule.forChild(MemberProfileComponent),
  ],
  exports: [
    MemberProfileComponent
  ]
})
export class MemberProfileComponentModule {}
