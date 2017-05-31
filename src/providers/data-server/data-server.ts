import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import { Base } from '../../libs/base';
//import { Log } from '../../libs/log';

@Injectable()
export class DataServerProvider {
  //private log: Log = Log.getLog('DataServerProvider');
  constructor(public http: Http) {
  }

/*  saveProfileToServer() {

  }*/

}
