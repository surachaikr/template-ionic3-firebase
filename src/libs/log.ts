import { Base } from './base';
export class Log {
    private source: string = 'NO_SOURCE';
    //private url: string = 'https://us-central1-xxx.cloudfunctions.net/log';

    constructor (source: string) {
        if (source) {
            this.source = source;
        }
    }

    static getLog(source: string) {
        return new Log(source);
    }

    info(message: string) {
        this.log('INFO', this.source, message);
    }

    debug(message: string) {
        this.log('DEBUG', this.source, message);
    }

    error(message: string) {
        this.log('ERROR', this.source, message);
    }

    private log(level: string, source: string, message: string) {
        if (Base._platform.is('cordova')) {

        } else if (Base._platform.is('core')) {
            console.log(level + ':' + source + ':' + message);
/*            let body = new URLSearchParams();
            body.set('level', level);
            body.set('source', source);
            body.set('message', message);
            let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
            Base._http.post(this.url, body, headers);*/
        }

    }
}