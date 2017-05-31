import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyListPage } from './my-list';
import { SharedModule } from '../../libs/shared.module';
import { HomeTabsHeaderComponentModule } from '../../components/home-tabs-header/home-tabs-header.module';

@NgModule({
  declarations: [
    MyListPage,
  ],
  imports: [
    IonicPageModule.forChild(MyListPage),
    SharedModule,
    HomeTabsHeaderComponentModule
  ],
  exports: [
    MyListPage
  ]
})
export class MyListPageModule {}
