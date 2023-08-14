import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'allSearch'
})
export class AllSearchPipe implements PipeTransform {

  transform(items: any[], searchTerm: string): any[] {
    if (!items || !searchTerm) {
      return items;
    }

    searchTerm = searchTerm.toLowerCase();

    return items.filter(item => {
      for (const key in item) {
        if (item.hasOwnProperty(key) && typeof item[key] === 'string') {
          if (item[key].toLowerCase().includes(searchTerm)) {
            return true;
          }
        }
      }
      return false;
    });
  }

}
