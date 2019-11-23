import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "orgunit"
})
export class OrgunitPipe implements PipeTransform {
  transform(orgunit: any): string {
    return orgunit ? orgunit.name : "";
  }
}
