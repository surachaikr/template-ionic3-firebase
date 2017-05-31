import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home-tabs',
  templateUrl: 'home-tabs.html',
})
export class HomeTabsPage {
  homeRoot = 'HomePage';
  myListRoot = 'MyListPage';

  constructor() {
  }

}

