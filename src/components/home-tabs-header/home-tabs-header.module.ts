import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeTabsHeaderComponent } from './home-tabs-header';

@NgModule({
  declarations: [
    HomeTabsHeaderComponent,
  ],
  imports: [
    IonicPageModule.forChild(HomeTabsHeaderComponent),
  ],
  exports: [
    HomeTabsHeaderComponent
  ]
})
export class HomeTabsHeaderComponentModule {}
