import { Component } from '@angular/core';
import { Events } from 'ionic-angular';

import {Base} from '../../libs/base'; 
//import {Log} from '../../libs/log';

@Component({
  selector: 'language-display',
  templateUrl: 'language-display.html'
})
export class LanguageDisplayComponent extends Base {
  //private log: Log = Log.getLog('LanguageDisplayComponent');

  constructor(public events: Events) {
    super();
  }

}
