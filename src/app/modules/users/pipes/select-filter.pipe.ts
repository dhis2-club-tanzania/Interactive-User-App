import { Pipe, PipeTransform } from "@angular/core";
import * as _ from "lodash";

@Pipe({
  name: "selectFilter"
})
export class SelectFilterPipe implements PipeTransform {
  transform(roles: any[]): any {
    const selectedRoles = _.filter(roles, role => role.selected === true);
    console.log(selectedRoles);
    return selectedRoles;
  }
}
