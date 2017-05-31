import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Base } from '../../libs/base';
import { Log } from '../../libs/log';

@Injectable()
export class DataGeneralProvider {
  private log: Log = Log.getLog('DataGeneralProvider');
  constructor(private http: Http) {
    
  }

  public loadAppConfig() {
    return new Promise(resolve => {
      try {
        this.http.get('assets/app_config.json')
          .map(res => res.json())
          .subscribe(data => {
            Base.loadAppConfig(data);
            resolve(true);
          });
      } catch (e) {
        this.log.error(e);
      }
    });
  }
}
