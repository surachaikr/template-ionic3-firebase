import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LanguageDisplayComponent } from './language-display';

@NgModule({
  declarations: [
    LanguageDisplayComponent,
  ],
  imports: [
    IonicPageModule.forChild(LanguageDisplayComponent),
  ],
  exports: [
    LanguageDisplayComponent
  ]
})
export class LanguageDisplayComponentModule {}
