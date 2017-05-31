import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Base } from '../../libs/base';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends Base {

  constructor() {
    super();
  }

}
