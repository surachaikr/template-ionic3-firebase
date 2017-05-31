import { Pipe, PipeTransform } from '@angular/core';
import { MiscUtil } from '../../libs/util';

@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  transform(value: string, args: any) {
    try {
      value = MiscUtil.phoneReadFormat(value);
    } catch (e) {
      //no action
    }

    return value;
  }
}
