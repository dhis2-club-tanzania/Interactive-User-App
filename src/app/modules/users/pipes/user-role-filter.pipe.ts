import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterByName"
})
export class FilterPipe implements PipeTransform {
  transform(values: any, searchTerm: string): any {
    if (!values || !searchTerm) {
      return values;
    }
    return values.filter(
      value =>
        value.name
          .toLowerCase()
          .indexOf((searchTerm ? searchTerm : "").toLocaleLowerCase()) !== -1
    );
    return values;
  }
}
