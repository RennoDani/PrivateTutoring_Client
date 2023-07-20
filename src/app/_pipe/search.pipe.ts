import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string, searchKey: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      const value = item[searchKey].toLowerCase();
      return value.includes(searchText);
    });
  }
}
