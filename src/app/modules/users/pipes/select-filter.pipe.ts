import { Pipe, PipeTransform } from "@angular/core";
import * as _ from "lodash";

@Pipe({
  name: "selectFilter"
})
export class SelectFilterPipe implements PipeTransform {
  transform(roles: any[], selected: boolean): any {
    const selectedRoles = _.filter(roles, role => role.selected === selected);
    return selectedRoles;
  }
  // transform(groups: any[], selected: boolean): any {
  //   const selectedGroups = _.filter(
  //     groups,
  //     group => group.selected === selected
  //   );
  //   return selectedGroups;
  // }
}
