import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from './util';
import { PhonePipeModule } from '../pipes/phone/phone.module';

@NgModule({
    imports: [
        HttpClientModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
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