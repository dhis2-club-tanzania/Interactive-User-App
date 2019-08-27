import { Pipe, PipeTransform } from "@angular/core";
import * as _ from "lodash";

@Pipe({
  name: "selectFilter"
})
export class SelectFilterPipe implements PipeTransform {
  transform(roles: any[]): any {
    console.log(_.filter(roles, role => role.selected));
    return roles;
  }
}
