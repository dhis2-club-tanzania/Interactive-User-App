import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'selectFilter'
})
export class SelectFilterPipe implements PipeTransform {
  transform(roles: any[]): any {
    const selected = _.filter(roles, role => role.selected);
    console.log(_.filter(roles, role => role.selected));
    // console.log('From Pipe', selected);
    // return selected;
  }
}
