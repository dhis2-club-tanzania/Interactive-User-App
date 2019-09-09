import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "searchByName"
})
export class SearchByNamePipe implements PipeTransform {
  transform(values: any, searchedName: string): any {
    if (!values || !searchedName) {
      return values;
    }
    const data = values.filter(
      value =>
        value.displayName
          .toLowerCase()
          .indexOf((searchedName ? searchedName : "").toLocaleLowerCase()) !==
        -1
    );
    console.log(data);
    return data;
  }
}
