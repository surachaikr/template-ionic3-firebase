import { FormControl } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Base } from './base';
//import { Log } from './log';

export function createTranslateLoader(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

export class ValidatorUtil {
    public static email(control: FormControl): { [s: string]: boolean } {
        //http://emailregex.com/
        if (!control.value.match(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i)) {
            return { email: true };
        }
    }
}

export class MiscUtil {
    public static getStorageDataName(name: string) {
        if (Base._memberProfile) {
            return Base._memberProfile.id + '_' + name;
        } else if (Base._currentUid) {
            return Base._currentUid + '_' + name;
        } else {
            return name;
        }
    }

    public static phoneReadFormat(phone: string): any {
        let format: string = phone;
        if (phone) {
            if (phone.length > 9) {
                format = phone.slice(0, 3) + ' ' + phone.slice(3, 5) + ' ' + phone.slice(5, 8) + ' ' + phone.slice(8, phone.length);
            }
        }
        return format;
    }
}