import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Base } from '../../libs/base';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends Base {
  poweredBy: string;

  constructor() {
    super();
  }

  ionViewDidLoad() {
    this.translate();
    this.translateService.onLangChange.subscribe(ev => {
      this.translate();
    });
  }

  translate() {
    this.translateService.get('POWERED_BY').subscribe(value => {
      this.poweredBy = value;
    });
  }
}
