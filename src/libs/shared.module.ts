import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from './util';
import { PhonePipeModule } from '../pipes/phone/phone.module';

@NgModule({
    imports: [
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [Http]
            }
        }),
        PhonePipeModule
    ],
    exports: [
        TranslateModule,
        PhonePipeModule
    ]
})
export class SharedModule { }