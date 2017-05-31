import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';
import {Base} from '../../libs/base'; 

@Component({
  selector: 'home-tabs-header',
  templateUrl: 'home-tabs-header.html'
})
export class HomeTabsHeaderComponent extends Base {

  constructor(private menuController: MenuController) {
    super();
  }

  openMenu() {
    this.menuController.open();
  }
}  