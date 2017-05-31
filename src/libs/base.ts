import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { Platform, Events } from 'ionic-angular';
import { MemberProfile } from './model/member_profile';

export class Base {
    public Base() {
    }

    public static _translateService: TranslateService;
    public static _storage: Storage;
    public static _http: Http;
    public static _platform: Platform;
    public static _events: Events;
    public static _appVersion: string;
    public static _appName: string;
    public static _dataPath: string;
    public static _storageCurrentUid: string;
    public static _currentUid: string;
    public static _storageMemberProfile: string;
    public static _memberProfile: MemberProfile;
    public static _notifyToken: any;

    public translateService: TranslateService = Base._translateService;
    public storage: Storage = Base._storage;
    public http: Http = Base._http;
    public platform: Platform = Base._platform;
    public memberProfile: MemberProfile = Base._memberProfile;

    public static loadAppConfig(data: any) {
        this._appVersion = data.APP_VERSION;
        this._appName = data.APP_NAME;
        this._dataPath = data.DATA_PATH;
        this._storageMemberProfile = data.STORAGE_MEMBER_PROFILE;
        this._storageCurrentUid = data.STORAGE_CURRENT_UID;
    }
}