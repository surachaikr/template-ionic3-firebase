import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { SharedModule } from '../../libs/shared.module';
import { HomeTabsHeaderComponentModule } from '../../components/home-tabs-header/home-tabs-header.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    SharedModule,
    HomeTabsHeaderComponentModule
  ],
  exports: [
    HomePage
  ]
})
export class HomeTabsPageModule {}
